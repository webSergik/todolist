import { AxiosResponse } from 'axios';

import { axiosInstance } from './axios-instance';
import { IUser } from '../types/IUser';

export const UserService = {
	getCurrentUser: (): Promise<AxiosResponse> =>
		axiosInstance.post<IUser>('/users/me'),
};
