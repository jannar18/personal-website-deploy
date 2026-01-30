const { Resend } = require('resend');

exports.handler = async (event) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { payload } = JSON.parse(event.body);
    const { email } = payload.data;

    // Only process subscribe form submissions
    if (payload.form_name !== 'subscribe') {
      return { statusCode: 200, body: 'Not a subscribe form' };
    }

    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: email,
      subject: 'Thanks for subscribing!',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #3d3028;">
          <h1 style="font-size: 24px; font-weight: normal; margin-bottom: 24px;">Welcome!</h1>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
            Thanks for subscribing to my newsletter. You'll receive updates when I publish new posts about architecture, AI, and writing.
          </p>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
            In the meantime, feel free to explore the blog and reach out if you have any questions.
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #8b7355;">
            — Julianna
          </p>
        </div>
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Welcome email sent' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' })
    };
  }
};
