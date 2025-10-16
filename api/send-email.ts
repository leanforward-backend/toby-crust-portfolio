import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, subject, questions } = req.body;

        if (!email || !name) {
            return res.status(400).json({ error: 'Missing required fields: name and email' });
        }

        const { data, error } = await resend.emails.send({
            from: 'Contracting Work <onboarding@resend.dev>',
            to: 'leanforward.designs@gmail.com',
            subject: `New contact request from ${name}`,
            html: `
            <html>
                <body style="background-color: #000000; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;">
                    <div style="margin: auto; padding: 96px 20px 64px;">    
                        <h1 style="color: #ffffff; font-size: 24px; font-weight: 600; line-height: 40px; margin: 0 0 20px;">New contact request from ${name}</h1>
                        <p style="color: #ffffff; font-size: 14px; line-height: 24px; margin: 0 0 20px;">Name: ${name}</p>
                        <p style="color: #ffffff; font-size: 14px; line-height: 24px; margin: 0 0 20px;">Email: ${email}</p>
                        <p style="color: #ffffff; font-size: 14px; line-height: 24px; margin: 0 0 20px;">Subject: ${subject}</p>
                        <p style="color: #ffffff; font-size: 14px; line-height: 24px; margin: 0 0 20px;">Questions: ${questions}</p>
                    </div>
                </body>
            </html>
            `,
        });

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to send email' });
    }
}