import { NextRequest, NextResponse } from 'next/server';
import { loginSchema, type AuthResponse } from '@/lib/types';
import jwt from 'jsonwebtoken';
import { UserService } from '@/lib/userService';

export async function POST(request: NextRequest): Promise<NextResponse<AuthResponse>> {
    try {
        const body = await request.json();

        // Validate the request body
        const validatedFields = loginSchema.safeParse(body);

        if (!validatedFields.success) {
            return NextResponse.json({
                success: false,
                message: 'Invalid input data',
                errors: validatedFields.error.flatten().fieldErrors as any,
            }, { status: 400 });
        }

        const { email, password } = validatedFields.data;

        // Verify credentials using database
        const user = await UserService.verifyCredentials({ email, password });

        if (!user) {
            return NextResponse.json({
                success: false,
                message: 'Invalid email or password',
            }, { status: 401 });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '7d' }
        );

        // Return success response
        return NextResponse.json({
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
        }, { status: 200 });

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({
            success: false,
            message: 'Internal server error',
        }, { status: 500 });
    }
} 