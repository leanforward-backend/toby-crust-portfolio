# Email Integration Setup Guide

Your contact form is now linked to the React Email template! Here's what has been set up and what you need to do to complete the integration.

## What's Been Done ✅

1. **Contact Form (`src/src/components/contact_section.tsx`)**
   - Added form submission handler
   - Added loading states (button shows "Sending..." while submitting)
   - Form data is sent to `/api/send-email` endpoint
   - All original styling and layout preserved

2. **API Route (`api/send-email.ts`)**
   - Vercel serverless function created
   - Handles form submissions
   - Sends email using Resend service
   - Uses your React Email template (`contract-invitation.tsx`)
   - CORS enabled for cross-origin requests

3. **React Email Template (`src/react-email-starter/emails/contract-invitation.tsx`)**
   - Fixed typo: `tobycrust@gmailcom` → `tobycrust@gmail.com`
   - Template ready to use

4. **Project Configuration**
   - `vercel.json` configured for proper deployment
   - Root `package.json` created with necessary dependencies

## Next Steps 🚀

### 1. Install Dependencies

Install the root-level dependencies:
```bash
npm install
```

### 2. Set Up Resend Account

1. Go to [https://resend.com](https://resend.com) and sign up
2. Verify your domain (or use their testing domain for development)
3. Get your API key from the dashboard

### 3. Configure Environment Variables

#### For Local Development:
Create a `.env` file in the root directory:
```env
RESEND_API_KEY=your_api_key_here
```

#### For Vercel Deployment:
1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add: `RESEND_API_KEY` = `your_api_key_here`

### 4. Update Email Settings

In `api/send-email.ts`, update line 36:
```typescript
from: 'onboarding@resend.dev', // Change this to your verified domain
```

Replace with your verified domain, for example:
```typescript
from: 'hello@yourdomain.com',
```

### 5. Test Locally

Run your development server:
```bash
cd src
npm run dev
```

Note: The API route won't work in local development without additional setup. Use Vercel CLI for local testing:
```bash
npm install -g vercel
vercel dev
```

### 6. Deploy to Vercel

```bash
vercel
```

Or push to your connected GitHub repository for automatic deployment.

## How It Works 🔄

1. User fills out the contact form
2. On submit, form data is sent to `/api/send-email`
3. Serverless function receives the data
4. Email is sent to the user using Resend
5. User receives a nicely formatted email using your React Email template
6. Form shows success/error message

## Customization Options 🎨

### Change Email Content
Edit `src/react-email-starter/emails/contract-invitation.tsx`

### Add Success/Error Messages
The form already tracks status with `submitStatus` state. To display messages, add this after the last form field in `contact_section.tsx`:

```tsx
{submitStatus === 'success' && (
  <div className="p-4 bg-green-50 text-green-800 rounded-md">
    ✓ Message sent successfully! Check your email for confirmation.
  </div>
)}
{submitStatus === 'error' && (
  <div className="p-4 bg-red-50 text-red-800 rounded-md">
    ✗ Failed to send message. Please try again or email directly.
  </div>
)}
```

### Preview Email Template
```bash
cd src/react-email-starter
npm install
npm run dev
```

This opens a preview server at `http://localhost:3000` where you can see and edit your email templates in real-time.

## Troubleshooting 🔧

**Email not sending:**
- Check that `RESEND_API_KEY` is set correctly
- Verify your domain in Resend dashboard
- Check Vercel function logs for errors

**API route not found:**
- Make sure `vercel.json` is in the root directory
- Redeploy to Vercel after adding the API route

**CORS errors:**
- The API route already has CORS headers configured
- If issues persist, check your Vercel deployment settings

## Additional Features to Consider 📝

1. **Add Email to Yourself:**
   Send a copy of the form submission to your email address

2. **Database Storage:**
   Store form submissions in a database (Supabase, Vercel Postgres, etc.)

3. **Rate Limiting:**
   Prevent spam by limiting submissions per IP/email

4. **Validation:**
   Add server-side validation for email format and message length

## Files Modified/Created

- ✏️ `src/src/components/contact_section.tsx` - Added form submission logic
- ✏️ `src/react-email-starter/emails/contract-invitation.tsx` - Fixed typo
- ✨ `api/send-email.ts` - API route for sending emails
- ✨ `vercel.json` - Vercel configuration
- ✨ `package.json` - Root dependencies
- ✨ `api/README.md` - API documentation

---

Your email integration is ready! Just complete the setup steps above and you'll be receiving form submissions via email. 🎉

