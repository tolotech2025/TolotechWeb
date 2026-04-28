import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// ── Premium HTML email builder ──────────────────────────────────────────────

function buildNotifyEmail(name: string, email: string, service: string, message: string, isES: boolean): string {
  const timestamp = new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "full", timeStyle: "short" });
  const serviceLabel = service || (isES ? "No especificado" : "Not specified");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>New Lead — Tolotech</title>
</head>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f2f5;padding:40px 16px;">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

  <!-- Header -->
  <tr><td style="background:#1B2B4B;border-radius:14px 14px 0 0;padding:32px 36px;">
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <p style="margin:0;font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.5px;">TOLO<span style="color:#00C896;">TECH</span></p>
        <p style="margin:6px 0 0;font-size:11px;color:rgba(255,255,255,0.45);letter-spacing:2px;text-transform:uppercase;">New Contact Submission</p>
      </td>
      <td align="right">
        <span style="display:inline-block;background:rgba(0,200,150,0.15);border:1px solid rgba(0,200,150,0.4);color:#00C896;font-size:11px;font-weight:700;letter-spacing:1.5px;padding:5px 12px;border-radius:99px;">LEAD</span>
      </td>
    </tr>
    </table>
  </td></tr>

  <!-- Body -->
  <tr><td style="background:#fff;padding:36px;">

    <p style="margin:0 0 24px;font-size:16px;color:#4a4a5a;line-height:1.6;">
      You have a new message from <strong style="color:#1B2B4B;">${name}</strong> via <strong>tolotech.net</strong>.
    </p>

    <!-- Details table -->
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa;border-radius:10px;overflow:hidden;margin-bottom:28px;">
      <tr>
        <td style="padding:14px 20px;border-bottom:1px solid #eee;font-size:12px;color:#888;width:110px;vertical-align:top;">NAME</td>
        <td style="padding:14px 20px;border-bottom:1px solid #eee;font-size:15px;font-weight:700;color:#1B2B4B;">${name}</td>
      </tr>
      <tr>
        <td style="padding:14px 20px;border-bottom:1px solid #eee;font-size:12px;color:#888;vertical-align:top;">EMAIL</td>
        <td style="padding:14px 20px;border-bottom:1px solid #eee;">
          <a href="mailto:${email}" style="font-size:15px;color:#2E7CF6;text-decoration:none;font-weight:600;">${email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:14px 20px;border-bottom:1px solid #eee;font-size:12px;color:#888;vertical-align:top;">SERVICE</td>
        <td style="padding:14px 20px;border-bottom:1px solid #eee;font-size:15px;color:#1B2B4B;">${serviceLabel}</td>
      </tr>
      <tr>
        <td style="padding:14px 20px;font-size:12px;color:#888;vertical-align:top;">LANGUAGE</td>
        <td style="padding:14px 20px;font-size:15px;color:#1B2B4B;">${isES ? "Spanish 🇪🇸" : "English 🇺🇸"}</td>
      </tr>
    </table>

    <!-- Message -->
    <p style="margin:0 0 10px;font-size:11px;color:#aaa;letter-spacing:1.5px;text-transform:uppercase;font-weight:600;">Message</p>
    <div style="background:#f7f8fa;border-left:3px solid #2E7CF6;border-radius:0 8px 8px 0;padding:18px 20px;margin-bottom:32px;">
      <p style="margin:0;font-size:15px;color:#1a1a1a;line-height:1.75;white-space:pre-wrap;">${message}</p>
    </div>

    <!-- CTA -->
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center">
      <a href="mailto:${email}?subject=Re%3A%20Tolotech%20Inquiry&body=Hi%20${encodeURIComponent(name)}%2C%0A%0A"
         style="display:inline-block;background:linear-gradient(135deg,#1B2B4B,#2a3f66);color:#fff;font-size:15px;font-weight:700;padding:14px 36px;border-radius:99px;text-decoration:none;letter-spacing:0.2px;">
        Reply to ${name} →
      </a>
    </td></tr>
    </table>

  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#f7f8fa;border-radius:0 0 14px 14px;padding:18px 36px;text-align:center;">
    <p style="margin:0;font-size:12px;color:#bbb;">
      Received ${timestamp} ET &nbsp;·&nbsp; <a href="https://tolotech.net" style="color:#2E7CF6;text-decoration:none;">tolotech.net</a>
    </p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

function buildAutoReplyEmail(name: string, service: string, message: string, isES: boolean): string {
  const serviceLabel = service || (isES ? "tu consulta" : "your inquiry");
  if (isES) {
    return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Recibimos tu mensaje — Tolotech</title>
</head>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f2f5;padding:40px 16px;">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#1B2B4B 0%,#2a3f66 100%);border-radius:14px 14px 0 0;padding:40px 36px;text-align:center;">
    <p style="margin:0 0 8px;font-size:26px;font-weight:800;color:#fff;letter-spacing:-0.5px;">TOLO<span style="color:#00C896;">TECH</span></p>
    <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.5);letter-spacing:1.5px;text-transform:uppercase;">Next Generation Solutions</p>
    <div style="margin:28px auto 0;width:56px;height:56px;background:rgba(0,200,150,0.15);border:2px solid rgba(0,200,150,0.5);border-radius:50%;line-height:56px;font-size:24px;text-align:center;">✓</div>
  </td></tr>

  <!-- Body -->
  <tr><td style="background:#fff;padding:40px 36px;">
    <h1 style="margin:0 0 10px;font-size:24px;font-weight:800;color:#1B2B4B;letter-spacing:-0.5px;">¡Recibimos tu mensaje, ${name}!</h1>
    <p style="margin:0 0 28px;font-size:16px;color:#4a4a5a;line-height:1.7;">
      Gracias por contactarnos. Nuestro equipo revisará tu consulta y te responderá en <strong style="color:#1B2B4B;">menos de 24 horas</strong>.
    </p>

    <!-- Summary card -->
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa;border-radius:12px;overflow:hidden;margin-bottom:32px;">
      <tr><td style="padding:16px 20px;background:#f0f2f5;border-bottom:1px solid #e8e8e8;">
        <p style="margin:0;font-size:11px;font-weight:700;color:#888;letter-spacing:1.5px;text-transform:uppercase;">Tu solicitud</p>
      </td></tr>
      <tr><td style="padding:20px;">
        <p style="margin:0 0 6px;font-size:12px;color:#aaa;text-transform:uppercase;letter-spacing:1px;">Servicio</p>
        <p style="margin:0 0 16px;font-size:15px;font-weight:600;color:#1B2B4B;">${serviceLabel}</p>
        <p style="margin:0 0 6px;font-size:12px;color:#aaa;text-transform:uppercase;letter-spacing:1px;">Tu mensaje</p>
        <p style="margin:0;font-size:14px;color:#4a4a5a;line-height:1.65;white-space:pre-wrap;">${message.length > 200 ? message.substring(0, 200) + "…" : message}</p>
      </td></tr>
    </table>

    <!-- What's next -->
    <p style="margin:0 0 18px;font-size:14px;font-weight:700;color:#1B2B4B;text-transform:uppercase;letter-spacing:0.5px;">¿Qué sigue?</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;width:36px;">
          <span style="display:inline-block;width:26px;height:26px;background:#e8f0fe;border-radius:50%;text-align:center;line-height:26px;font-size:13px;font-weight:700;color:#2E7CF6;">1</span>
        </td>
        <td style="padding:10px 0 10px 12px;border-bottom:1px solid #f0f0f0;font-size:14px;color:#4a4a5a;">Revisamos tu solicitud con detenimiento</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
          <span style="display:inline-block;width:26px;height:26px;background:#e8f0fe;border-radius:50%;text-align:center;line-height:26px;font-size:13px;font-weight:700;color:#2E7CF6;">2</span>
        </td>
        <td style="padding:10px 0 10px 12px;border-bottom:1px solid #f0f0f0;font-size:14px;color:#4a4a5a;">Te respondemos en menos de 24 horas con una solución clara</td>
      </tr>
      <tr>
        <td style="padding:10px 0;vertical-align:top;">
          <span style="display:inline-block;width:26px;height:26px;background:#e0faf3;border-radius:50%;text-align:center;line-height:26px;font-size:13px;font-weight:700;color:#00C896;">3</span>
        </td>
        <td style="padding:10px 0 10px 12px;font-size:14px;color:#4a4a5a;">Empezamos a trabajar juntos</td>
      </tr>
    </table>

    <!-- Contact alternatives -->
    <div style="background:linear-gradient(135deg,#f7f8fa,#eef2ff);border-radius:10px;padding:20px 24px;margin-bottom:32px;">
      <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#1B2B4B;">¿Necesitas respuesta inmediata?</p>
      <p style="margin:0 0 6px;font-size:13px;color:#4a4a5a;">📞 <a href="tel:+18503211134" style="color:#2E7CF6;text-decoration:none;">+1 (850) 321-1134</a></p>
      <p style="margin:0 0 6px;font-size:13px;color:#4a4a5a;">💬 <a href="https://wa.me/18503211134" style="color:#2E7CF6;text-decoration:none;">WhatsApp: +1 (850) 321-1134</a></p>
      <p style="margin:0;font-size:13px;color:#4a4a5a;">✉️ <a href="mailto:info@tolotech.net" style="color:#2E7CF6;text-decoration:none;">info@tolotech.net</a></p>
    </div>

  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#1B2B4B;border-radius:0 0 14px 14px;padding:24px 36px;text-align:center;">
    <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#fff;letter-spacing:-0.2px;">TOLO<span style="color:#00C896;">TECH</span> — Next Generation Solutions</p>
    <p style="margin:0 0 12px;font-size:12px;color:rgba(255,255,255,0.4);">Florida, USA &nbsp;·&nbsp; Bilingüe EN/ES</p>
    <a href="https://tolotech.net" style="font-size:12px;color:#00C896;text-decoration:none;">tolotech.net</a>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
  }

  // English version
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>We got your message — Tolotech</title>
</head>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f2f5;padding:40px 16px;">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#1B2B4B 0%,#2a3f66 100%);border-radius:14px 14px 0 0;padding:40px 36px;text-align:center;">
    <p style="margin:0 0 8px;font-size:26px;font-weight:800;color:#fff;letter-spacing:-0.5px;">TOLO<span style="color:#00C896;">TECH</span></p>
    <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.5);letter-spacing:1.5px;text-transform:uppercase;">Next Generation Solutions</p>
    <div style="margin:28px auto 0;width:56px;height:56px;background:rgba(0,200,150,0.15);border:2px solid rgba(0,200,150,0.5);border-radius:50%;line-height:56px;font-size:24px;text-align:center;">✓</div>
  </td></tr>

  <!-- Body -->
  <tr><td style="background:#fff;padding:40px 36px;">
    <h1 style="margin:0 0 10px;font-size:24px;font-weight:800;color:#1B2B4B;letter-spacing:-0.5px;">Got your message, ${name}!</h1>
    <p style="margin:0 0 28px;font-size:16px;color:#4a4a5a;line-height:1.7;">
      Thanks for reaching out to Tolotech. Our team will review your message and get back to you within <strong style="color:#1B2B4B;">24 hours</strong> — usually much sooner.
    </p>

    <!-- Summary card -->
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa;border-radius:12px;overflow:hidden;margin-bottom:32px;">
      <tr><td style="padding:16px 20px;background:#f0f2f5;border-bottom:1px solid #e8e8e8;">
        <p style="margin:0;font-size:11px;font-weight:700;color:#888;letter-spacing:1.5px;text-transform:uppercase;">Your Request</p>
      </td></tr>
      <tr><td style="padding:20px;">
        <p style="margin:0 0 6px;font-size:12px;color:#aaa;text-transform:uppercase;letter-spacing:1px;">Service</p>
        <p style="margin:0 0 16px;font-size:15px;font-weight:600;color:#1B2B4B;">${serviceLabel}</p>
        <p style="margin:0 0 6px;font-size:12px;color:#aaa;text-transform:uppercase;letter-spacing:1px;">Your Message</p>
        <p style="margin:0;font-size:14px;color:#4a4a5a;line-height:1.65;white-space:pre-wrap;">${message.length > 200 ? message.substring(0, 200) + "…" : message}</p>
      </td></tr>
    </table>

    <!-- What's next -->
    <p style="margin:0 0 18px;font-size:14px;font-weight:700;color:#1B2B4B;text-transform:uppercase;letter-spacing:0.5px;">What happens next</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;width:36px;">
          <span style="display:inline-block;width:26px;height:26px;background:#e8f0fe;border-radius:50%;text-align:center;line-height:26px;font-size:13px;font-weight:700;color:#2E7CF6;">1</span>
        </td>
        <td style="padding:10px 0 10px 12px;border-bottom:1px solid #f0f0f0;font-size:14px;color:#4a4a5a;">We review your request carefully</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
          <span style="display:inline-block;width:26px;height:26px;background:#e8f0fe;border-radius:50%;text-align:center;line-height:26px;font-size:13px;font-weight:700;color:#2E7CF6;">2</span>
        </td>
        <td style="padding:10px 0 10px 12px;border-bottom:1px solid #f0f0f0;font-size:14px;color:#4a4a5a;">We follow up within 24 hours with a clear, honest answer — no jargon</td>
      </tr>
      <tr>
        <td style="padding:10px 0;vertical-align:top;">
          <span style="display:inline-block;width:26px;height:26px;background:#e0faf3;border-radius:50%;text-align:center;line-height:26px;font-size:13px;font-weight:700;color:#00C896;">3</span>
        </td>
        <td style="padding:10px 0 10px 12px;font-size:14px;color:#4a4a5a;">We get to work together</td>
      </tr>
    </table>

    <!-- Contact alternatives -->
    <div style="background:linear-gradient(135deg,#f7f8fa,#eef2ff);border-radius:10px;padding:20px 24px;margin-bottom:32px;">
      <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#1B2B4B;">Need a faster reply?</p>
      <p style="margin:0 0 6px;font-size:13px;color:#4a4a5a;">📞 <a href="tel:+18503211134" style="color:#2E7CF6;text-decoration:none;">+1 (850) 321-1134</a></p>
      <p style="margin:0 0 6px;font-size:13px;color:#4a4a5a;">💬 <a href="https://wa.me/18503211134" style="color:#2E7CF6;text-decoration:none;">WhatsApp: +1 (850) 321-1134</a></p>
      <p style="margin:0;font-size:13px;color:#4a4a5a;">✉️ <a href="mailto:info@tolotech.net" style="color:#2E7CF6;text-decoration:none;">info@tolotech.net</a></p>
    </div>

  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#1B2B4B;border-radius:0 0 14px 14px;padding:24px 36px;text-align:center;">
    <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#fff;letter-spacing:-0.2px;">TOLO<span style="color:#00C896;">TECH</span> — Next Generation Solutions</p>
    <p style="margin:0 0 12px;font-size:12px;color:rgba(255,255,255,0.4);">Florida, USA &nbsp;·&nbsp; Bilingual EN/ES</p>
    <a href="https://tolotech.net" style="font-size:12px;color:#00C896;text-decoration:none;">tolotech.net</a>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

// ── Main handler ────────────────────────────────────────────────────────────

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, service, message, lang } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    const isES        = lang === "es";
    const resendKey   = Deno.env.get("RESEND_API_KEY") ?? "";
    const notifyEmail = Deno.env.get("NOTIFY_EMAIL") ?? "info@tolotech.net";
    const fromAddress = "Tolotech <info@tolotech.net>";

    const results: Record<string, string> = {};

    // ── 1. Notify email → you ──────────────────────────────────────────────
    const notifySubject = isES
      ? `🔔 Nuevo mensaje de Tolotech.net — ${name}`
      : `🔔 New lead from Tolotech.net — ${name}`;

    const notifyRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromAddress,
        to: [notifyEmail],
        reply_to: email,
        subject: notifySubject,
        html: buildNotifyEmail(name, email, service, message, isES),
      }),
    });
    const notifyBody = await notifyRes.text();
    results.notify = notifyRes.ok ? "OK" : `ERROR ${notifyRes.status}: ${notifyBody}`;
    if (!notifyRes.ok) console.error("Notify email error:", notifyRes.status, notifyBody);

    // ── 2. Auto-reply → client ─────────────────────────────────────────────
    const replySubject = isES
      ? `Recibimos tu mensaje, ${name} — Tolotech`
      : `We got your message, ${name} — Tolotech`;

    const replyRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromAddress,
        to: [email],
        reply_to: notifyEmail,
        subject: replySubject,
        html: buildAutoReplyEmail(name, service, message, isES),
      }),
    });
    const replyBody = await replyRes.text();
    results.autoreply = replyRes.ok ? "OK" : `ERROR ${replyRes.status}: ${replyBody}`;
    if (!replyRes.ok) console.error("Auto-reply error:", replyRes.status, replyBody);

    const allOk = results.notify === "OK" && results.autoreply === "OK";
    return new Response(
      JSON.stringify({ success: allOk, results }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("Function error:", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
