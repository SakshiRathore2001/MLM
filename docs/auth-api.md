# Authentication API Documentation

This document describes the authentication APIs for the AUM application with PostgreSQL database integration.

## Overview

The authentication system provides login and registration functionality with JWT token-based authentication. The APIs are built using Next.js 13+ App Router with both API routes and server actions, connected to a PostgreSQL database.

## Database Integration

The system uses PostgreSQL for data persistence with the following features:
- **Connection Pooling**: Efficient database connection management
- **Prepared Statements**: SQL injection protection
- **Indexed Queries**: Fast lookups on email and mobile
- **Password Hashing**: Secure bcrypt hashing
- **Transaction Support**: Data integrity

## API Endpoints

### 1. Login API

**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "1",
      "name": "John Doe",
      "email": "user@example.com",
      "mobile": "+919876543210"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 2. Register API

**Endpoint:** `POST /api/auth/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "user@example.com",
  "mobile": "+919876543210",
  "password": "password123",
  "confirmPassword": "password123"
}
```

**Mobile Number Validation:**
- Must start with `+91` (Indian country code)
- Must be followed by a digit from 6-9 (valid Indian mobile prefixes)
- Must be exactly 10 digits after the country code
- Total length: 13 characters (e.g., `+919876543210`)

**Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "user": {
      "id": "1234567890",
      "name": "John Doe",
      "email": "user@example.com",
      "mobile": "+919876543210"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Responses:**
```json
{
  "success": false,
  "message": "User with this email already exists"
}
```
```json
{
  "success": false,
  "message": "User with this mobile number already exists"
}
```

### 3. Get Current User API

**Endpoint:** `GET /api/auth/me`

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "1",
    "name": "John Doe",
    "email": "user@example.com",
    "mobile": "+919876543210",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## Server Actions

The application also provides server actions for authentication:

### Login Action
```typescript
import { loginAction } from '@/app/actions';

const result = await loginAction({
  email: 'user@example.com',
  password: 'password123'
});
```

### Register Action
```typescript
import { registerAction } from '@/app/actions';

const result = await registerAction({
  name: 'John Doe',
  email: 'user@example.com',
  mobile: '+919876543210',
  password: 'password123',
  confirmPassword: 'password123'
});
```

## Client-Side Usage

### Using the API Utility

```typescript
import { authAPI } from '@/lib/api';

// Login
const loginResult = await authAPI.login({
  email: 'user@example.com',
  password: 'password123'
});

if (loginResult.success) {
  authAPI.setAuthToken(loginResult.data!.token);
  // Redirect or update UI
}

// Register
const registerResult = await authAPI.register({
  name: 'John Doe',
  email: 'user@example.com',
  mobile: '+919876543210',
  password: 'password123',
  confirmPassword: 'password123'
});

// Check authentication status
if (authAPI.isAuthenticated()) {
  // User is logged in
}

// Logout
authAPI.logout();
```

### Using with React Hook Form

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterValues } from '@/lib/types';
import { authAPI } from '@/lib/api';

export function RegisterForm() {
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterValues) => {
    const result = await authAPI.register(data);
    
    if (result.success) {
      authAPI.setAuthToken(result.data!.token);
      // Handle successful registration
    } else {
      // Handle error
      console.error(result.message);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}
```

### Mobile Number Input Component Example

```typescript
import { Input } from '@/components/ui/input';

export function MobileInput({ ...props }) {
  return (
    <Input
      placeholder="+919876543210"
      {...props}
    />
  );
}
```

## Environment Variables

Make sure to set the following environment variables in your `.env.local` file:

```env
# Database Configuration
DB_USER=postgres
DB_HOST=localhost
DB_NAME=aum_db
DB_PASSWORD=your_password_here
DB_PORT=5432

# JWT Configuration
JWT_SECRET=your-secret-key-here

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:9002

# Environment
NODE_ENV=development
```

## Database Setup

Before using the APIs, you need to set up the PostgreSQL database:

1. **Install PostgreSQL** (see `docs/database-setup.md` for detailed instructions)
2. **Create Database**: `CREATE DATABASE aum_db;`
3. **Set Environment Variables**: Configure your `.env.local` file
4. **Initialize Tables**: Run `npm run db:init`

## Security Features

1. **Password Hashing**: Passwords are hashed using bcrypt with salt rounds of 10
2. **JWT Tokens**: Authentication tokens with 7-day expiration
3. **Input Validation**: All inputs are validated using Zod schemas
4. **Mobile Number Validation**: Indian mobile numbers with +91 country code
5. **Duplicate Prevention**: Database-level checks for existing email and mobile numbers
6. **SQL Injection Protection**: Prepared statements and parameterized queries
7. **Connection Pooling**: Efficient database connection management
8. **Error Handling**: Comprehensive error handling with appropriate HTTP status codes

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

## Notes

- The system uses PostgreSQL for data persistence
- All user data is stored securely with hashed passwords
- Database connections are managed through connection pooling
- The system supports both API routes and server actions
- Mobile number validation ensures only valid Indian mobile numbers are accepted
- Consider implementing refresh tokens for better security in production
- Add rate limiting for production use
- Implement proper CORS configuration for cross-origin requests

## Testing

You can test the APIs using tools like Postman or curl:

```bash
# Login
curl -X POST http://localhost:9002/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Register
curl -X POST http://localhost:9002/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","mobile":"+919876543210","password":"password123","confirmPassword":"password123"}'

# Get current user (requires token)
curl -X GET http://localhost:9002/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Mobile Number Validation Rules

The mobile number field follows these validation rules:

1. **Format**: `+91` followed by 10 digits
2. **Prefix**: Must start with 6, 7, 8, or 9 (valid Indian mobile prefixes)
3. **Length**: Exactly 13 characters total
4. **Examples**:
   - ✅ `+919876543210`
   - ✅ `+916123456789`
   - ❌ `+919123456789` (invalid prefix)
   - ❌ `+91987654321` (too short)
   - ❌ `919876543210` (missing +)

## Database Management

### Useful Commands

```sql
-- View all users
SELECT id, name, email, mobile, created_at FROM users;

-- Count total users
SELECT COUNT(*) FROM users;

-- Find user by email
SELECT * FROM users WHERE email = 'user@example.com';

-- Find user by mobile
SELECT * FROM users WHERE mobile = '+919876543210';
```

For more detailed database setup and management instructions, see `docs/database-setup.md`. 