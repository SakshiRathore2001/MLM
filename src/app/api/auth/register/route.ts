import { NextRequest, NextResponse } from 'next/server';
import { registerSchema, type AuthResponse } from '@/lib/types';
import jwt from 'jsonwebtoken';
import { UserService } from '@/lib/userService';

export async function POST(request: NextRequest): Promise<NextResponse<AuthResponse>> {
    try {
        const body = await request.json();

        // Validate the request body
        const validatedFields = registerSchema.safeParse(body);

        if (!validatedFields.success) {
            return NextResponse.json({
                success: false,
                message: 'Invalid input data',
                errors: validatedFields.error.flatten().fieldErrors as any,
            }, { status: 400 });
        }

        const { name, email, mobile, password } = validatedFields.data;

        // Check if user already exists (by email or mobile)
        const existingUserByEmail = await UserService.emailExists(email);
        if (existingUserByEmail) {
            return NextResponse.json({
                success: false,
                message: 'User with this email already exists',
            }, { status: 409 });
        }

        const existingUserByMobile = await UserService.mobileExists(mobile);
        if (existingUserByMobile) {
            return NextResponse.json({
                success: false,
                message: 'User with this mobile number already exists',
            }, { status: 409 });
        }

        // Create new user in database
        const newUser = await UserService.createUser({ name, email, mobile, password, confirmPassword: password });

        // Return success response (do not log in user yet)
        return NextResponse.json({
            success: true,
            message: 'Registration successful. Please check your email for the OTP.',
            data: {
                user: {
                    id: newUser.id.toString(),
                    name: newUser.name,
                    email: newUser.email,
                    mobile: newUser.mobile,
                },
            },
        }, { status: 201 });

    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json({
            success: false,
            message: 'Internal server error',
        }, { status: 500 });
    }
} 