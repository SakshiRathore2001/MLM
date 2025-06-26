import { Pool, PoolClient } from 'pg';

// Database configuration
const dbConfig = {
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'aum_db',
    password: process.env.DB_PASSWORD || 'password',
    port: parseInt(process.env.DB_PORT || '5432'),
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    // Connection pool configuration
    max: 20, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
};

// Create a connection pool
const pool = new Pool(dbConfig);

// Test the connection
pool.on('connect', (client: PoolClient) => {
    console.log('Connected to PostgreSQL database');
});

pool.on('error', (err: Error, client: PoolClient) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

// Helper function to get a client from the pool
export async function getClient(): Promise<PoolClient> {
    return await pool.connect();
}

// Helper function to execute a query
export async function query(text: string, params?: any[]): Promise<any> {
    const client = await getClient();
    try {
        const result = await client.query(text, params);
        return result;
    } finally {
        client.release();
    }
}

// Initialize database tables
export async function initDatabase(): Promise<void> {
    try {
        // Create users table
        await query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        mobile VARCHAR(15) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        is_verified BOOLEAN DEFAULT FALSE,
        otp_code VARCHAR(10),
        otp_expires_at TIMESTAMP WITH TIME ZONE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

        // Create index on email and mobile for faster lookups
        await query(`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)
    `);

        await query(`
      CREATE INDEX IF NOT EXISTS idx_users_mobile ON users(mobile)
    `);

        console.log('Database tables initialized successfully');
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error;
    }
}

// Close the pool (call this when shutting down the application)
export async function closePool(): Promise<void> {
    await pool.end();
}

export default pool; 