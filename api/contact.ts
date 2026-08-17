import type { IncomingMessage, ServerResponse } from 'http';
import nodemailer from 'nodemailer';

// Helper to parse JSON body in standard Vercel serverless functions
async function getJsonBody(req: any): Promise<any> {
  if (req.body) return req.body;
  return new Promise((resolve) => {
    let data = '';
    req.on('data', (chunk: any) => {
      data += chunk;
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(data));
      } catch {
        resolve({});
      }
    });
  });
}

export default async function handler(req: any, res: any) {
  // Enable CORS if needed
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed. Use POST.' });
  }

  try {
    const body = typeof req.body === 'object' && req.body !== null ? req.body : await getJsonBody(req);
    const {
      fullName,
      corporateEmail,
      organisation,
      jobTitle,
      areaOfInterest,
      phone,
      message,
    } = body;

    // Validation
    if (!fullName || !corporateEmail || !organisation || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (Full Name, Corporate Email, Organisation, Message).',
      });
    }

    const host = process.env.SMTP_HOST || 'mail.cittanuvola.com';
    const port = parseInt(process.env.SMTP_PORT || '465', 10);
    const secure = process.env.SMTP_SECURE !== 'false';
    const user = process.env.SMTP_USER || 'cittasl@cittanuvola.com';
    const pass = process.env.SMTP_PASS;
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || 'cittasl@cittanuvola.com';

    if (!pass) {
      return res.status(200).json({
        success: true,
        mode: 'unconfigured_smtp',
        message: 'Contact details recorded. SMTP password not set in environment.',
        fallbackUrl: `mailto:${recipient}?subject=${encodeURIComponent(`Consultation Request: ${organisation} (${fullName})`)}&body=${encodeURIComponent(
          `Full Name: ${fullName}\nCorporate Email: ${corporateEmail}\nPhone: ${phone || 'N/A'}\nOrganisation: ${organisation}\nJob Title: ${jobTitle || 'N/A'}\nArea of Interest: ${areaOfInterest || 'General Inquiry'}\n\nMessage:\n${message}`
        )}`,
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const subjectLine = `[CSL Consultation Request] ${organisation} - ${fullName}`;

    const textContent = `
NEW ENTERPRISE CONSULTATION INQUIRY (via CittaSL Web Portal)
============================================================

Contact Details:
- Full Name: ${fullName}
- Corporate Email: ${corporateEmail}
- Phone / WhatsApp: ${phone || 'Not provided'}
- Organisation / Company: ${organisation}
- Job Title / Role: ${jobTitle || 'Not provided'}
- Area of Interest: ${areaOfInterest || 'Enterprise Software & Compliance'}

Message / Requirements:
------------------------------------------------------------
${message}

============================================================
Submitted via: www.cittasl.com | Powered by QServers Mail Gateway
Timestamp: ${new Date().toISOString()}
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
    .header { background: #0f172a; padding: 28px; text-align: left; border-bottom: 3px solid #2582ff; }
    .header h2 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; }
    .header p { margin: 6px 0 0; color: #94a3b8; font-size: 12px; font-family: monospace; text-transform: uppercase; }
    .content { padding: 28px; }
    .badge { display: inline-block; background: #eff6ff; color: #2582ff; border: 1px solid #bfdbfe; font-size: 11px; font-weight: 700; font-family: monospace; padding: 4px 10px; border-radius: 9999px; margin-bottom: 20px; }
    .grid { margin-bottom: 24px; border: 1px solid #f1f5f9; border-radius: 12px; overflow: hidden; }
    .row { display: flex; border-bottom: 1px solid #f1f5f9; }
    .row:last-child { border-bottom: none; }
    .label { width: 35%; background: #f8fafc; padding: 12px 16px; font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; font-family: monospace; }
    .value { width: 65%; padding: 12px 16px; font-size: 14px; color: #0f172a; font-weight: 500; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin-top: 16px; font-size: 14px; color: #334155; white-space: pre-wrap; }
    .footer { background: #f8fafc; padding: 16px 28px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; font-family: monospace; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>CittaSL Corporate Inquiry</h2>
      <p>Gateway: QServers SMTP &bull; Received ${new Date().toLocaleString('en-GB', { timeZone: 'Africa/Lagos' })} WAT</p>
    </div>
    <div class="content">
      <span class="badge">CONSULTATION INQUIRY</span>
      
      <div class="grid">
        <div class="row">
          <div class="label">Full Name</div>
          <div class="value"><strong>${fullName}</strong></div>
        </div>
        <div class="row">
          <div class="label">Corporate Email</div>
          <div class="value"><a href="mailto:${corporateEmail}" style="color: #2582ff; text-decoration: none;">${corporateEmail}</a></div>
        </div>
        <div class="row">
          <div class="label">Organisation</div>
          <div class="value"><strong>${organisation}</strong></div>
        </div>
        <div class="row">
          <div class="label">Job Title</div>
          <div class="value">${jobTitle || 'Not specified'}</div>
        </div>
        <div class="row">
          <div class="label">Phone / WhatsApp</div>
          <div class="value">${phone || 'Not specified'}</div>
        </div>
        <div class="row">
          <div class="label">Area of Interest</div>
          <div class="value" style="color: #2582ff; font-weight: 600;">${areaOfInterest || 'General Inquiry'}</div>
        </div>
      </div>

      <div style="font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; font-family: monospace; margin-top: 20px;">
        Detailed Inquiry Message:
      </div>
      <div class="message-box">${message}</div>
    </div>
    <div class="footer">
      This email was delivered via CittaSL (cittasl.com) &bull; QServers SMTP Server (${host})
    </div>
  </div>
</body>
</html>
    `.trim();

    await transporter.sendMail({
      from: `"CittaSL Web Portal" <${user}>`,
      to: recipient,
      replyTo: `"${fullName}" <${corporateEmail}>`,
      subject: subjectLine,
      text: textContent,
      html: htmlContent,
    });

    return res.status(200).json({
      success: true,
      mode: 'qservers_smtp',
      message: 'Inquiry successfully transmitted via QServers SMTP.',
    });
  } catch (error: any) {
    console.error('[Vercel QServers SMTP Error]:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to dispatch email via QServers SMTP endpoint.',
    });
  }
}
