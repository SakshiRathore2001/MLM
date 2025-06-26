import { NextRequest, NextResponse } from 'next/server';
import { UserService } from '@/lib/userService';

export async function POST(request: NextRequest) {
    try {
        const { email, otp } = await request.json();
        if (!email || !otp) {
            return NextResponse.json({ success: false, message: 'Email and OTP are required.' }, { status: 400 });
        }
        const result = await UserService.verifyOtp(email, otp);
        if (result.success) {
            return NextResponse.json({ success: true, message: 'OTP verified successfully.' });
        } else {
            return NextResponse.json({ success: false, message: result.message }, { status: 400 });
        }
    } catch (error) {
        console.error('OTP verification error:', error);
        return NextResponse.json({ success: false, message: 'Internal server error.' }, { status: 500 });
    }
} 