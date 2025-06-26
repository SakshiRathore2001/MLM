import axios from 'axios';

// Replace with your actual API base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to use relative URLs for Next.js API routes
axiosInstance.interceptors.request.use(
  (config) => {
    // If the request is for a Next.js API route, use relative URL
    if (typeof config.url === 'string' && config.url.startsWith('/api/')) {
      config.baseURL = '';
    } else {
      config.baseURL = API_BASE_URL;
    }
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
