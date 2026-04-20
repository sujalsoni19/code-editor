export const resetPasswordTemplate = (resetURL) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>Reset Password</title>
  </head>

  <body style="margin:0;padding:20px;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#222;">

    <div style="max-width:520px;margin:0 auto;border:1px solid #e5e5e5;border-radius:8px;padding:24px;">

      <h2 style="margin:0 0 12px 0;text-align:center;font-size:22px;">
        Reset your password
      </h2>

      <p style="margin:0 0 12px 0;font-size:14px;line-height:1.5;">
        We received a request to reset your password.
      </p>

      <p style="margin:0 0 18px 0;font-size:14px;line-height:1.5;">
        Click the button below to create a new password.
      </p>

      <div style="text-align:center;margin:18px 0;">
        <a href="${resetURL}"
        style="
        background:#2ea44f;
        color:#ffffff;
        padding:10px 20px;
        border-radius:6px;
        text-decoration:none;
        font-size:14px;
        font-weight:600;
        display:inline-block;
        ">
        Reset Password
        </a>
      </div>

      <p style="margin:14px 0 0 0;font-size:13px;color:#555;">
        This link will expire in <strong>1 hour</strong>.
      </p>

      <p style="margin:16px 0 0 0;font-size:13px;">
        Thanks,<br/>
        <strong>Syncode Team</strong>
      </p>

    </div>

    <p style="max-width:520px;margin:14px auto 0 auto;font-size:12px;color:#777;text-align:center;">
      If you didn't request this password reset, you can safely ignore this email.
    </p>

  </body>
  </html>
  `;
};