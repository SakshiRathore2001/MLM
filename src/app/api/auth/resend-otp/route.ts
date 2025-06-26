import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { sendMail } from '@/lib/email';

function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();
        if (!email) {
            return NextResponse.json({ success: false, message: 'Email is required.' }, { status: 400 });
        }
        // Check if user exists
        const result = await query('SELECT id FROM users WHERE email = $1', [email]);
        const user = result.rows[0];
        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found.' }, { status: 404 });
        }
        // Generate new OTP
        const otp = generateOtp();
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
        await query('UPDATE users SET otp_code = $1, otp_expires_at = $2 WHERE id = $3', [otp, otpExpires, user.id]);
        // Send OTP email
        await sendMail({
            to: email,
            subject: 'Your OTP Code',
            text: `Your new OTP code is: ${otp}`,
            html: `<p>Your new OTP code is: <b>${otp}</b></p>`
        });
        return NextResponse.json({ success: true, message: 'OTP resent successfully.' });
    } catch (error) {
        console.error('Resend OTP error:', error);
        return NextResponse.json({ success: false, message: 'Internal server error.' }, { status: 500 });
    }
} 