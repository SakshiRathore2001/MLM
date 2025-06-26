import { z } from "zod";
import { Spinner } from '@/components/ui/spinner';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

// Authentication schemas
export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

export const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  mobile: z.string()
    .regex(/^[6-9]\d{9}$/, {
      message: "Please enter a valid 10-digit Indian mobile number (starting with 6-9)",
    }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type LoginValues = z.infer<typeof loginSchema>;
export type RegisterValues = z.infer<typeof registerSchema>;

export type AuthResponse = {
  success: boolean;
  message: string;
  data?: {
    user: {
      id: string;
      name: string;
      email: string;
      mobile: string;
    };
    token?: string;
  };
  errors?: string[];
};

export type User = {
  id: number;
  name: string;
  email: string;
  mobile: string;
  created_at: string;
  updated_at: string;
};
