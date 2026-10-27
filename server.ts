import express from 'express';
import path from 'path';
import { readFileSync } from 'fs';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { buildStructuredData, pageSeo } from './src/seoData';

dotenv.config();

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function replaceMeta(html: string, attribute: string, key: string, content: string) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(<meta\\s+${attribute}="${escapedKey}"\\s+content=")[^"]*(")`, 'i');

  if (pattern.test(html)) {
    return html.replace(pattern, (_match, prefix, suffix) => `${prefix}${escapeHtml(content)}${suffix}`);
  }

  return html.replace(
    '</head>',
    `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />\n</head>`,
  );
}

function replaceLink(html: string, rel: string, href: string) {
  const escapedRel = rel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(<link\\s+rel="${escapedRel}"\\s+href=")[^"]*(")`, 'i');

  if (pattern.test(html)) {
    return html.replace(pattern, (_match, prefix, suffix) => `${prefix}${escapeHtml(href)}${suffix}`);
  }

  return html.replace('</head>', `<link rel="${rel}" href="${escapeHtml(href)}" />\n</head>`);
}

function injectCittaEfsSeo(html: string) {
  const page = pageSeo.cittaefs;
  let output = html;

  output = output.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(page.title)}</title>`,
  );

  output = replaceMeta(output, 'name', 'description', page.description);
  output = replaceMeta(output, 'name', 'summary', page.description);
  output = replaceMeta(output, 'name', 'subject', 'CittaEFS fiscal compliance software and NRS e-invoicing');
  output = replaceMeta(
    output,
    'name',
    'keywords',
    'CittaEFS, fiscal software Nigeria, fiscal compliance software, tax compliance software Nigeria, NRS e-invoicing, NRS fiscalization, electronic invoicing Nigeria, e-invoicing software Nigeria, tax pre-clearance middleware, VAT compliance software Nigeria, SAP fiscal connector, Oracle NetSuite tax integration, Odoo VAT connector, Microsoft Dynamics 365 fiscalization, ERP compliance middleware, invoice validation software, RegTech Nigeria',
  );
  output = replaceMeta(
    output,
    'name',
    'topic',
    'Fiscal software, NRS e-invoicing, tax pre-clearance, ERP compliance middleware, VAT automation',
  );
  output = replaceMeta(output, 'property', 'og:title', page.title);
  output = replaceMeta(output, 'property', 'og:description', page.description);
  output = replaceMeta(output, 'property', 'og:url', page.url);
  output = replaceMeta(output, 'property', 'og:type', 'website');
  output = replaceMeta(output, 'property', 'og:image', page.image);
  output = replaceMeta(output, 'property', 'og:image:secure_url', page.image);
  output = replaceMeta(output, 'property', 'og:image:type', 'image/png');
  output = replaceMeta(output, 'property', 'og:image:width', '1200');
  output = replaceMeta(output, 'property', 'og:image:height', '630');
  output = replaceMeta(output, 'property', 'og:image:alt', page.imageAlt);
  output = replaceMeta(output, 'name', 'twitter:card', 'summary_large_image');
  output = replaceMeta(output, 'name', 'twitter:title', page.title);
  output = replaceMeta(output, 'name', 'twitter:description', page.description);
  output = replaceMeta(output, 'name', 'twitter:image', page.image);
  output = replaceMeta(output, 'name', 'twitter:image:alt', page.imageAlt);
  output = replaceMeta(output, 'itemprop', 'name', page.title);
  output = replaceMeta(output, 'itemprop', 'description', page.description);
  output = replaceMeta(output, 'itemprop', 'image', page.image);

  output = replaceLink(output, 'canonical', page.url);
  output = replaceLink(output, 'image_src', page.image);

  const structuredData = JSON.stringify(buildStructuredData('cittaefs')).replace(/</g, '\\u003c');
  output = output.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script type="application/ld+json">${structuredData}</script>`,
  );

  return output;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser for JSON API requests
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'CittaSL Enterprise Gateway' });
  });

  // QServers SMTP Transporter Lazy Initializer
  const getMailTransporter = () => {
    const host = process.env.SMTP_HOST || 'mail.cittanuvola.com';
    const port = parseInt(process.env.SMTP_PORT || '465', 10);
    const secure = process.env.SMTP_SECURE !== 'false'; // true for port 465, false for 587
    const user = process.env.SMTP_USER || 'cittasl@cittanuvola.com';
    const pass = process.env.SMTP_PASS;

    if (!pass) {
      return null;
    }

    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
      tls: {
        // Safe TLS configuration for custom cPanel/QServers mail domains
        rejectUnauthorized: false,
      },
    });
  };

  // Check QServers SMTP status endpoint
  app.get('/api/contact/status', (_req, res) => {
    const hasConfig = !!process.env.SMTP_PASS;
    res.json({
      configured: hasConfig,
      provider: 'QServers / cPanel SMTP',
      host: process.env.SMTP_HOST || 'mail.cittanuvola.com',
      port: process.env.SMTP_PORT || '465',
      user: process.env.SMTP_USER || 'cittasl@cittanuvola.com',
    });
  });

  // Contact Form Submission Route via QServers SMTP
  app.post('/api/contact', async (req, res) => {
    try {
      const {
        fullName,
        corporateEmail,
        organisation,
        jobTitle,
        areaOfInterest,
        phone,
        message,
      } = req.body;

      // Basic input validation
      if (!fullName || !corporateEmail || !organisation || !message) {
        return res.status(400).json({
          success: false,
          error: 'Please fill in all required fields (Full Name, Corporate Email, Organisation, Message).',
        });
      }

      const recipient = process.env.CONTACT_RECIPIENT_EMAIL || 'cittasl@cittanuvola.com';
      const senderUser = process.env.SMTP_USER || 'cittasl@cittanuvola.com';
      const transporter = getMailTransporter();

      if (!transporter) {
        // If SMTP_PASS is not yet provided in runtime environment variables
        console.warn('[QServers SMTP] SMTP_PASS environment variable is not configured.');
        return res.status(200).json({
          success: true,
          mode: 'unconfigured_smtp',
          message: 'Contact details recorded. SMTP password not set in environment.',
          fallbackUrl: `mailto:${recipient}?subject=${encodeURIComponent(`Consultation Request: ${organisation} (${fullName})`)}&body=${encodeURIComponent(
            `Full Name: ${fullName}\nCorporate Email: ${corporateEmail}\nPhone: ${phone || 'N/A'}\nOrganisation: ${organisation}\nJob Title: ${jobTitle || 'N/A'}\nArea of Interest: ${areaOfInterest || 'General Inquiry'}\n\nMessage:\n${message}`
          )}`,
        });
      }

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
    .badge { display: inline-block; background: #eff6ff; color: #2582ff; border: 1px solid #bfdbfe; font-size: 11px; font-weight: 700; font-family: monospace; padding: 4px 10px; rounded-full; border-radius: 9999px; margin-bottom: 20px; }
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
      This email was delivered via CittaSL (cittasl.com) &bull; QServers SMTP Server (${process.env.SMTP_HOST || 'mail.cittanuvola.com'})
    </div>
  </div>
</body>
</html>
      `.trim();

      // Dispatch via QServers SMTP
      await transporter.sendMail({
        from: `"CittaSL Web Portal" <${senderUser}>`,
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
      console.error('[QServers SMTP Error]:', error);
      return res.status(500).json({
        success: false,
        error: error.message || 'Failed to dispatch email via QServers SMTP endpoint.',
      });
    }
  });

  // Keep one canonical URL for the CittaEFS page
  app.use((req, res, next) => {
    if (req.method === 'GET' && req.path === '/cittaefs/') {
      return res.redirect(301, '/cittaefs');
    }
    next();
  });

  // Unknown API routes should not fall through to the HTML app
  app.use('/api', (_req, res) => {
    res.status(404).json({ success: false, error: 'API route not found.' });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });

    app.get('/cittaefs', async (req, res, next) => {
      try {
        const template = readFileSync(path.join(process.cwd(), 'index.html'), 'utf-8');
        const html = await vite.transformIndexHtml(req.originalUrl, template);
        res.status(200).set('Content-Type', 'text/html').send(injectCittaEfsSeo(html));
      } catch (error) {
        vite.ssrFixStacktrace(error as Error);
        next(error);
      }
    });

    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    const indexHtmlPath = path.join(distPath, 'index.html');

    app.get('/cittaefs', (_req, res) => {
      const html = readFileSync(indexHtmlPath, 'utf-8');
      res.status(200).set('Content-Type', 'text/html').send(injectCittaEfsSeo(html));
    });

    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.status(404).sendFile(path.join(distPath, '404.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`CittaSL Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
