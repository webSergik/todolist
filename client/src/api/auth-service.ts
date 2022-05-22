import { AxiosResponse } from 'axios';

import { axiosInstance } from './axios-instance';
import { AuthResponse } from '../types/AuthResponse';

export const AuthService = {
	signUp: (
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> =>
		axiosInstance.post<AuthResponse>('/auth/signup', {
			email,
			password,
		}),

	login: (
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> =>
		axiosInstance.post<AuthResponse>('/auth/signin', { email, password }),

	logout: (): Promise<void> => axiosInstance.post('/auth/logout'),
};
