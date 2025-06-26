"use server";

import { contactFormSchema, type ContactFormState, type ContactFormValues } from "@/lib/types";
import { loginSchema, registerSchema, type LoginValues, type RegisterValues, type AuthResponse } from "@/lib/types";
import jwt from 'jsonwebtoken';
import { UserService } from '@/lib/userService';

export async function submitContactForm(
  values: ContactFormValues
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      message: "Invalid form data.",
      issues: validatedFields.error.flatten().fieldErrors.message,
    };
  }

  try {
    // Here you would typically send an email, e.g., using a service like Resend or Nodemailer.
    // For this example, we'll just log the data to the console to simulate the action.
    console.log("New contact form submission:");
    console.log("Name:", validatedFields.data.name);
    console.log("Email:", validatedFields.data.email);
    console.log("Message:", validatedFields.data.message);

    return { message: "Thank you! Your message has been sent successfully." };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      issues: ["Server error"],
    };
  }
}

export async function loginAction(values: LoginValues): Promise<AuthResponse> {
  try {
    const validatedFields = loginSchema.safeParse(values);

    if (!validatedFields.success) {
      return {
        success: false,
        message: 'Invalid input data',
        errors: Object.values(validatedFields.error.flatten().fieldErrors).flat(),
      };
    }

    const { email, password } = validatedFields.data;

    // Verify credentials using database
    const user = await UserService.verifyCredentials({ email, password });
    if (!user) {
      return {
        success: false,
        message: 'Invalid email or password',
      };
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    return {
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
          mobile: user.mobile,
        },
        token,
      },
    };

  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      message: 'Internal server error',
    };
  }
}

export async function registerAction(values: RegisterValues): Promise<AuthResponse> {
  try {
    const validatedFields = registerSchema.safeParse(values);

    if (!validatedFields.success) {
      return {
        success: false,
        message: 'Invalid input data',
        errors: Object.values(validatedFields.error.flatten().fieldErrors).flat(),
      };
    }

    const { name, email, mobile, password } = validatedFields.data;

    // Check if user already exists (by email or mobile)
    const existingUserByEmail = await UserService.emailExists(email);
    if (existingUserByEmail) {
      return {
        success: false,
        message: 'User with this email already exists',
      };
    }

    const existingUserByMobile = await UserService.mobileExists(mobile);
    if (existingUserByMobile) {
      return {
        success: false,
        message: 'User with this mobile number already exists',
      };
    }

    // Create new user in database
    const newUser = await UserService.createUser({ name, email, mobile, password, confirmPassword: password });

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    return {
      success: true,
      message: 'Registration successful',
      data: {
        user: {
          id: newUser.id.toString(),
          name: newUser.name,
          email: newUser.email,
          mobile: newUser.mobile,
        },
        token,
      },
    };

  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      message: 'Internal server error',
    };
  }
}
