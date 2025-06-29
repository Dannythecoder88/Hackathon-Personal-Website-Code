import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { to, from, subject, text } = await request.json();

    const { data, error } = await resend.emails.send({
      from: from || 'onboarding@resend.dev',
      to: to,
      subject: subject,
      text: text,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
