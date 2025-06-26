import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { UserService } from '@/lib/userService';

export async function GET(request: NextRequest) {
    try {
        const tokenUser = getCurrentUser(request);

        if (!tokenUser) {
            return NextResponse.json({
                success: false,
                message: 'Unauthorized',
            }, { status: 401 });
        }

        // Fetch user data from database
        const user = await UserService.findById(tokenUser.userId);

        if (!user) {
            return NextResponse.json({
                success: false,
                message: 'User not found',
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            data: {
                id: user.id.toString(),
                name: user.name,
                email: user.email,
                mobile: user.mobile,
                createdAt: user.created_at,
                updatedAt: user.updated_at,
            },
        }, { status: 200 });

    } catch (error) {
        console.error('Get current user error:', error);
        return NextResponse.json({
            success: false,
            message: 'Internal server error',
        }, { status: 500 });
    }
} 