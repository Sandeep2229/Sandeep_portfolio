# Portfolio Backend Server

Backend API server for handling contact form submissions.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Create a `.env` file in the `server` directory (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Configure email (optional):
   - For Gmail: Use an [App Password](https://support.google.com/accounts/answer/185833)
   - For other services: Configure SMTP settings
   - If email is not configured, form submissions will be logged to console

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:3001`

## API Endpoints

### POST `/api/contact`
Submit contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to connect!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Email Configuration

The server supports multiple email providers:

### Gmail (Recommended for development)
1. Enable 2-Step Verification
2. Generate an App Password
3. Use the app password in `EMAIL_PASS`

### SMTP (Production)
Configure `SMTP_HOST`, `SMTP_PORT`, `EMAIL_USER`, and `EMAIL_PASS` for your SMTP provider.

For production, consider using:
- SendGrid
- AWS SES
- Resend
- Mailgun

## Development Notes

- If email is not configured, the server will still accept form submissions and log them to console
- The frontend is configured to proxy `/api` requests to this server in development
- CORS is enabled for all origins (restrict in production)

