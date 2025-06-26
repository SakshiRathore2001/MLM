import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

export async function sendMail({ to, subject, text, html }: { to: string; subject: string; text?: string; html?: string }) {
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to,
        subject,
        text,
        html,
    };
    return transporter.sendMail(mailOptions);
} 