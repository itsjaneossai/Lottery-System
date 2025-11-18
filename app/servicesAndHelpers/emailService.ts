import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export type SendEmailArgs = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  from?: string;
};
export async function sendEmail({
  to,
  subject,
  html,
  text,
  from,
}: SendEmailArgs) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set");
  }

  const { data, error } = await resend.emails.send({
    from: from ?? (process.env.EMAIL_FROM as string),
    to,
    subject,
    html,
    text,
  });

  if (error) {
    console.error("Email send error:", error);
    throw new Error("Failed to send email");
  }

  return data;
}
