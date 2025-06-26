# PostgreSQL Database Setup Guide

This guide will help you set up PostgreSQL database connection for the AUM authentication system.

## Prerequisites

1. **PostgreSQL** installed and running on your system
2. **Node.js** and **npm** installed
3. **TypeScript** support (already included in the project)

## Database Installation

### Windows
1. Download PostgreSQL from [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/)
2. Run the installer and follow the setup wizard
3. Remember the password you set for the `postgres` user
4. PostgreSQL will be installed on port 5432 by default

### macOS
```bash
# Using Homebrew
brew install postgresql
brew services start postgresql

# Or using the official installer
# Download from https://www.postgresql.org/download/macosx/
```

### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

## Database Setup

### 1. Create Database
```bash
# Connect to PostgreSQL as postgres user
sudo -u postgres psql

# Create database
CREATE DATABASE aum_db;

# Create a new user (optional, you can use postgres user)
CREATE USER aum_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE aum_db TO aum_user;

# Exit PostgreSQL
\q
```

### 2. Environment Variables
Create a `.env.local` file in your project root with the following variables:

```env
# Database Configuration
DB_USER=postgres
DB_HOST=localhost
DB_NAME=aum_db
DB_PASSWORD=your_password_here
DB_PORT=5432

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:9002

# Environment
NODE_ENV=development
```

### 3. Install Dependencies
The PostgreSQL dependencies are already installed:
- `pg` - PostgreSQL client for Node.js
- `@types/pg` - TypeScript definitions

### 4. Initialize Database Tables
Run the database initialization script:

```bash
npm run db:init
```

This will:
- Create the `users` table with proper schema
- Create indexes for better performance
- Create a default admin user (optional)

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  mobile VARCHAR(15) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_mobile ON users(mobile);
```

## Connection Configuration

The database connection is configured in `src/lib/db.ts` with the following features:

- **Connection Pooling**: Maximum 20 connections
- **Idle Timeout**: 30 seconds
- **Connection Timeout**: 2 seconds
- **SSL Support**: Enabled in production

## Testing the Connection

### 1. Start the Development Server
```bash
npm run dev
```

### 2. Test Registration API
```bash
curl -X POST http://localhost:9002/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "mobile": "+919876543210",
    "password": "password123",
    "confirmPassword": "password123"
  }'
```

### 3. Test Login API
```bash
curl -X POST http://localhost:9002/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

## Troubleshooting

### Common Issues

1. **Connection Refused**
   - Ensure PostgreSQL is running
   - Check if the port (5432) is correct
   - Verify firewall settings

2. **Authentication Failed**
   - Check username and password in `.env.local`
   - Verify database user permissions

3. **Database Does Not Exist**
   - Create the database: `CREATE DATABASE aum_db;`
   - Check database name in `.env.local`

4. **Permission Denied**
   - Grant proper permissions to the database user
   - Check PostgreSQL configuration files

### PostgreSQL Configuration Files

**Windows**: `C:\Program Files\PostgreSQL\[version]\data\pg_hba.conf`
**Linux/macOS**: `/etc/postgresql/[version]/main/pg_hba.conf`

Make sure the authentication method allows your connection:
```
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
# IPv6 local connections:
host    all             all             ::1/128                 md5
```

## Production Deployment

For production deployment:

1. **Use Environment Variables**: Never hardcode database credentials
2. **SSL Connection**: Enable SSL for secure connections
3. **Connection Pooling**: Adjust pool size based on your needs
4. **Backup Strategy**: Implement regular database backups
5. **Monitoring**: Set up database monitoring and logging

### Production Environment Variables
```env
DB_USER=your_production_user
DB_HOST=your_production_host
DB_NAME=your_production_db
DB_PASSWORD=your_secure_password
DB_PORT=5432
NODE_ENV=production
JWT_SECRET=your_very_secure_jwt_secret
```

## Database Management

### Useful PostgreSQL Commands

```sql
-- Connect to database
\c aum_db

-- List all tables
\dt

-- Describe table structure
\d users

-- View all users
SELECT id, name, email, mobile, created_at FROM users;

-- Count total users
SELECT COUNT(*) FROM users;

-- Delete a user
DELETE FROM users WHERE email = 'user@example.com';
```

### Backup and Restore

```bash
# Backup database
pg_dump -U postgres -h localhost aum_db > backup.sql

# Restore database
psql -U postgres -h localhost aum_db < backup.sql
```

## Security Best Practices

1. **Strong Passwords**: Use strong passwords for database users
2. **Limited Permissions**: Grant only necessary permissions to database users
3. **Network Security**: Restrict database access to trusted IP addresses
4. **Regular Updates**: Keep PostgreSQL updated with security patches
5. **Encryption**: Use SSL connections in production
6. **Audit Logging**: Enable PostgreSQL audit logging for security monitoring 