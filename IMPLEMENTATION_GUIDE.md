# UltraLife Login Screen - Implementation Guide

## Overview
This login screen authenticates members from the "UltraLife Monthly Updates" Airtable database using their email and password stored in the Members table.

## Current Implementation
The provided React component (`ultralife-login.jsx`) currently uses **sample data** for demonstration purposes. It includes 5 test accounts that you can use to see how the login flow works.

### Test Credentials
- **Email:** aaron.royston@ultralife.com | **Password:** AaronR2024!
- **Email:** aleem.tejani@ultralife.com | **Password:** AleemT$2024
- **Email:** carlos.malatesta@ultralife.com | **Password:** CarlosM#2024
- **Email:** sarah.douglass@ultralife.com | **Password:** SarahD2024!
- **Email:** talor.zamir@ultralife.com | **Password:** TalorZ2024!

## How to Connect to Real Airtable Data

### Option 1: Backend API (Recommended for Production)

For security reasons, you should **never** store or check passwords in client-side code. Instead, create a backend API that handles authentication:

#### Step 1: Create a Backend API
Create a Node.js/Express backend:

```javascript
// server.js
const express = require('express');
const Airtable = require('airtable');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configure Airtable
const base = new Airtable({ apiKey: 'YOUR_AIRTABLE_API_KEY' })
  .base('appShheFjBIpUtI4G');

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Search for member by email
    const records = await base('Members')
      .select({
        filterByFormula: `LOWER({Email}) = LOWER('${email}')`,
        maxRecords: 1
      })
      .firstPage();

    if (records.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const member = records[0];
    const storedPassword = member.get('Password');

    // In production, use hashed passwords with bcrypt
    if (storedPassword === password) {
      res.json({
        success: true,
        member: {
          name: member.get('Name'),
          email: member.get('Email')
        }
      });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
```

#### Step 2: Update React Component
Replace the `handleLogin` function in `ultralife-login.jsx`:

```javascript
const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok && data.success) {
      setLoggedInMember({
        name: data.member.name,
        email: data.member.email
      });
      setError('');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  } catch (err) {
    console.error('Login error:', err);
    setError('An error occurred during login. Please try again.');
  } finally {
    setLoading(false);
  }
};
```

### Option 2: Direct Airtable Connection (For Internal Use Only)

⚠️ **Security Warning:** This approach exposes your Airtable API key in client-side code. Only use this for internal tools or prototypes.

```javascript
// Install: npm install airtable

import Airtable from 'airtable';

const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    const base = new Airtable({ apiKey: 'YOUR_AIRTABLE_API_KEY' })
      .base('appShheFjBIpUtI4G');

    const records = await base('Members')
      .select({
        filterByFormula: `LOWER({Email}) = LOWER('${email}')`,
        maxRecords: 1
      })
      .firstPage();

    if (records.length > 0) {
      const member = records[0];
      const storedPassword = member.get('Password');

      if (storedPassword === password) {
        setLoggedInMember({
          name: member.get('Name'),
          email: member.get('Email')
        });
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } else {
      setError('Invalid email or password. Please try again.');
    }
  } catch (err) {
    console.error('Login error:', err);
    setError('An error occurred during login. Please try again.');
  } finally {
    setLoading(false);
  }
};
```

## Security Best Practices

### 1. Password Hashing
Currently, passwords are stored in plain text in Airtable. For production:
- Use bcrypt to hash passwords
- Never store plain text passwords
- Hash passwords before storing in Airtable

### 2. HTTPS Only
- Always use HTTPS for your application
- Never send credentials over HTTP

### 3. Rate Limiting
- Implement rate limiting to prevent brute force attacks
- Limit login attempts per IP address

### 4. Session Management
- Use JWT tokens or secure sessions after login
- Implement logout functionality that clears tokens
- Set appropriate token expiration times

### 5. Input Validation
- Validate email format
- Enforce password complexity requirements
- Sanitize all user inputs

## Airtable Database Details

**Base ID:** appShheFjBIpUtI4G
**Table:** Members (tblgBvDl6zowiluxo)

**Fields Used:**
- Name (fldEZeukfsjG7hnHM)
- Email (fldyAXx6U9v4KbDal)
- Password (fldwpiv0ZXR2WQQz1)

## Next Steps After Login

Once authenticated, you can:
1. Store user session (JWT token, session storage)
2. Redirect to member dashboard
3. Load member-specific data (forums, updates, etc.)
4. Display personalized content

## Environment Variables

Create a `.env` file:
```
AIRTABLE_API_KEY=your_api_key_here
AIRTABLE_BASE_ID=appShheFjBIpUtI4G
```

## Dependencies

For the React component:
```bash
npm install lucide-react
```

For the backend (if using Option 1):
```bash
npm install express airtable cors dotenv
```

## Support

For questions or issues:
1. Check Airtable API documentation: https://airtable.com/developers/web/api/introduction
2. Review React documentation for component integration
3. Test with sample credentials first before connecting to real data
