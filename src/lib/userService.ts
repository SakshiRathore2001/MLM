import { query } from './db';
import bcrypt from 'bcryptjs';
import { User, RegisterValues, LoginValues } from './types';
import { sendMail } from './email';

function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export class UserService {
    // Create a new user
    static async createUser(userData: RegisterValues): Promise<User> {
        const { name, email, mobile, password } = userData;

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Generate OTP
        const otp = generateOtp();
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        const result = await query(
            `INSERT INTO users (name, email, mobile, password, otp_code, otp_expires_at, is_verified) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING id, name, email, mobile, created_at, updated_at, is_verified`,
            [name, email, mobile, hashedPassword, otp, otpExpires, false]
        );

        // Send OTP email
        await sendMail({
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is: ${otp}`,
            html: `<p>Your OTP code is: <b>${otp}</b></p>`
        });

        return result.rows[0];
    }

    // Find user by email
    static async findByEmail(email: string): Promise<User | null> {
        const result = await query(
            'SELECT id, name, email, mobile, password, created_at, updated_at FROM users WHERE email = $1',
            [email]
        );

        return result.rows[0] || null;
    }

    // Find user by mobile
    static async findByMobile(mobile: string): Promise<User | null> {
        const result = await query(
            'SELECT id, name, email, mobile, password, created_at, updated_at FROM users WHERE mobile = $1',
            [mobile]
        );

        return result.rows[0] || null;
    }

    // Find user by ID
    static async findById(id: string): Promise<User | null> {
        const result = await query(
            'SELECT id, name, email, mobile, created_at, updated_at FROM users WHERE id = $1',
            [id]
        );

        return result.rows[0] || null;
    }

    // Check if email exists
    static async emailExists(email: string): Promise<boolean> {
        const result = await query(
            'SELECT 1 FROM users WHERE email = $1',
            [email]
        );

        return result.rows.length > 0;
    }

    // Check if mobile exists
    static async mobileExists(mobile: string): Promise<boolean> {
        const result = await query(
            'SELECT 1 FROM users WHERE mobile = $1',
            [mobile]
        );

        return result.rows.length > 0;
    }

    // Verify user credentials
    static async verifyCredentials(credentials: LoginValues): Promise<User | null> {
        const { email, password } = credentials;

        const user = await this.findByEmail(email);
        if (!user) {
            return null;
        }

        // Get the user with password for verification
        const result = await query(
            'SELECT id, name, email, mobile, password, created_at, updated_at FROM users WHERE email = $1',
            [email]
        );

        const userWithPassword = result.rows[0];
        if (!userWithPassword) {
            return null;
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, userWithPassword.password);
        if (!isPasswordValid) {
            return null;
        }

        // Return user without password
        const { password: _, ...userWithoutPassword } = userWithPassword;
        return userWithoutPassword;
    }

    // Update user
    static async updateUser(id: string, updates: Partial<User>): Promise<User | null> {
        const fields = [];
        const values = [];
        let paramCount = 1;

        if (updates.name) {
            fields.push(`name = $${paramCount}`);
            values.push(updates.name);
            paramCount++;
        }

        if (updates.email) {
            fields.push(`email = $${paramCount}`);
            values.push(updates.email);
            paramCount++;
        }

        if (updates.mobile) {
            fields.push(`mobile = $${paramCount}`);
            values.push(updates.mobile);
            paramCount++;
        }

        if (fields.length === 0) {
            return null;
        }

        fields.push(`updated_at = CURRENT_TIMESTAMP`);
        values.push(id);

        const result = await query(
            `UPDATE users SET ${fields.join(', ')} WHERE id = $${paramCount} 
       RETURNING id, name, email, mobile, created_at, updated_at`,
            values
        );

        return result.rows[0] || null;
    }

    // Delete user
    static async deleteUser(id: string): Promise<boolean> {
        const result = await query(
            'DELETE FROM users WHERE id = $1',
            [id]
        );

        return result.rowCount > 0;
    }

    // Get all users (for admin purposes)
    static async getAllUsers(): Promise<User[]> {
        const result = await query(
            'SELECT id, name, email, mobile, created_at, updated_at FROM users ORDER BY created_at DESC'
        );

        return result.rows;
    }

    // Get user count
    static async getUserCount(): Promise<number> {
        const result = await query('SELECT COUNT(*) FROM users');
        return parseInt(result.rows[0].count);
    }

    // Verify OTP
    static async verifyOtp(email: string, otp: string): Promise<{ success: boolean; message: string }> {
        const result = await query(
            'SELECT id, otp_code, otp_expires_at, is_verified FROM users WHERE email = $1',
            [email]
        );
        const user = result.rows[0];
        if (!user) return { success: false, message: 'User not found' };
        if (user.is_verified) return { success: false, message: 'User already verified' };
        if (!user.otp_code || !user.otp_expires_at) return { success: false, message: 'No OTP found, please register again' };
        if (user.otp_code !== otp) return { success: false, message: 'Invalid OTP' };
        if (new Date(user.otp_expires_at) < new Date()) return { success: false, message: 'OTP expired' };
        // Mark as verified and clear OTP
        await query(
            'UPDATE users SET is_verified = TRUE, otp_code = NULL, otp_expires_at = NULL WHERE id = $1',
            [user.id]
        );
        return { success: true, message: 'OTP verified successfully' };
    }
} 