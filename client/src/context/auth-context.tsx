import {
	useEffect,
	createContext,
	useContext,
	useState,
	ReactNode,
	FC,
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AxiosError } from 'axios';

import { AuthService } from '../api/auth-service';
import { UserService } from '../api/user-service';
import { IUser } from '../types/IUser';

interface IAuthContext {
	loadingInitial: boolean;
	user: IUser | null;
	loading: boolean;
	error?: any;
	login: (email: string, password: string) => void;
	signUp: (email: string, password: string) => void;
	logout: () => void;
}

type AuthProps = {
	children: ReactNode;
};

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: FC<AuthProps> = ({ children }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const [loadingInitial, setLoadingInitial] = useState(true);
	const [user, setUser] = useState<IUser | null>(null);
	const [error, setError] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (error) setError(null);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	useEffect(() => {
		const getCurrentUser = async () => {
			try {
				const response = await UserService.getCurrentUser();
				setUser(response.data.user);
				navigate('/todos/today');
			} catch (e) {
				navigate('/');
			} finally {
				setLoadingInitial(false);
			}
		};
		getCurrentUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const httpHelper = async (request: any) => {
		try {
			setError(null);
			setLoading(true);
			const response = await request;
			localStorage.setItem('token', response.data.accessToken);
			setUser(response.data.user);
			navigate('/');
		} catch (e) {
			if (e instanceof AxiosError) {
				if (e.response?.data) {
					setError(e.response?.data.message);
				} else {
					setError(e.message);
				}
			} else {
				setError(e);
			}
		} finally {
			setLoading(false);
		}
	};

	const login = async (email: string, password: string) => {
		await httpHelper(AuthService.login(email, password));
	};

	const signUp = async (email: string, password: string) => {
		await httpHelper(AuthService.signUp(email, password));
	};

	const logout = async () => {
		try {
			setLoading(true);
			await AuthService.logout();
			localStorage.removeItem('token');
			setUser(null);
			navigate('/');
		} catch (e) {
			if (e instanceof AxiosError) {
				if (e.response?.data) {
					setError(e.response?.data.message);
				} else {
					setError(e.message);
				}
			} else {
				setError(e);
			}
		} finally {
			setLoading(false);
		}
	};

	const conextValue = {
		loadingInitial,
		user,
		loading,
		error,
		login,
		signUp,
		logout,
	};

	return (
		<AuthContext.Provider value={conextValue}>{children}</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
