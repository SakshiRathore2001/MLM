import axios from 'axios';

// Replace with your actual API base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add a request interceptor to include the auth token
axiosInstance.interceptors.request.use(
  (config) => {
    // In a real app, you would get the token from your state management or local storage
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
