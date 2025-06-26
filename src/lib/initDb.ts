import { initDatabase } from './db';
import { UserService } from './userService';

export async function initializeDatabase() {
    try {
        console.log('Initializing database...');

        // Initialize database tables
        await initDatabase();

        console.log('Database initialization completed successfully!');

        // Optional: Create a default admin user
        const adminEmail = 'admin@example.com';
        const adminExists = await UserService.emailExists(adminEmail);

        if (!adminExists) {
            await UserService.createUser({
                name: 'Admin User',
                email: adminEmail,
                mobile: '+919876543210',
                password: 'admin123',
                confirmPassword: 'admin123'
            });
            console.log('Default admin user created');
        }

    } catch (error) {
        console.error('Database initialization failed:', error);
        throw error;
    }
}

// Run initialization if this file is executed directly
if (require.main === module) {
    initializeDatabase()
        .then(() => {
            console.log('Database setup completed');
            process.exit(0);
        })
        .catch((error) => {
            console.error('Database setup failed:', error);
            process.exit(1);
        });
} 