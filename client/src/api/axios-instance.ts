import axios from 'axios';

import { AuthResponse } from '../types/AuthResponse';

export const API_URL = 'http://localhost:5000/v1';

const axiosInstance = axios.create({
	withCredentials: true,
	baseURL: API_URL,
});

axiosInstance.interceptors.request.use((config) => {
	if (config.headers) {
		config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	}
	return config;
});

axiosInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status === 401 && !originalRequest._isRetry) {
			originalRequest._isRetry = true;
			try {
				const response = await axios.get<AuthResponse>(
					`${API_URL}/auth/refresh`,
					{
						withCredentials: true,
					}
				);
				localStorage.setItem('token', response.data.accessToken);
				return axiosInstance.request(originalRequest);
			} catch (e) {
				return Promise.reject(e);
			}
		}
		return Promise.reject(error);
	}
);

export { axiosInstance };
