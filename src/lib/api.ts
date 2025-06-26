import { axiosInstance } from '@/config/AxiosInstance';
import { LoginValues, RegisterValues, AuthResponse } from './types';

export const authAPI = {
    // Login user
    async login(credentials: LoginValues): Promise<AuthResponse> {
        try {
            const response = await axiosInstance.post('/api/auth/login', credentials);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return error.response.data;
            }
            throw new Error('Network error');
        }
    },

    // Register user
    async register(userData: RegisterValues): Promise<AuthResponse> {
        try {
            const response = await axiosInstance.post('/api/auth/register', userData);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return error.response.data;
            }
            throw new Error('Network error');
        }
    },

    // Get current user
    async getCurrentUser(): Promise<AuthResponse> {
        try {
            const response = await axiosInstance.get('/api/auth/me');
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return error.response.data;
            }
            throw new Error('Network error');
        }
    },

    // Logout (client-side only - just remove token)
    logout(): void {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
        }
    },

    // Set auth token
    setAuthToken(token: string): void {
        if (typeof window !== 'undefined') {
            localStorage.setItem('authToken', token);
        }
    },

    // Get auth token
    getAuthToken(): string | null {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('authToken');
        }
        return null;
    },

    // Check if user is authenticated
    isAuthenticated(): boolean {
        return this.getAuthToken() !== null;
    },
}; 