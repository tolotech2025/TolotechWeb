import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

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

    const isES = lang === "es";
    const subject = isES
      ? `🔔 Nuevo mensaje de Tolotech.net — ${name}`
      : `🔔 New lead from Tolotech.net — ${name}`;

    const emailBody = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: 'Helvetica Neue', Arial, sans-serif; background: #f5f5f5; padding: 40px 20px; margin: 0;">
  <div style="max-width: 560px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 20px rgba(0,0,0,0.08);">
    <div style="background: #1B2B4B; padding: 28px 32px;">
      <h1 style="color: #fff; margin: 0; font-size: 20px; font-weight: 700;">TOLOTECH</h1>
      <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 12px; letter-spacing: 1px;">NEW CONTACT SUBMISSION</p>
    </div>
    <div style="padding: 32px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #888; width: 120px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; font-weight: 600; color: #1B2B4B;">${name}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #888;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #2E7CF6;"><a href="mailto:${email}" style="color: #2E7CF6;">${email}</a></td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #888;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1B2B4B;">${service || "Not specified"}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #888;">Language</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #1B2B4B;">${isES ? "Spanish" : "English"}</td></tr>
      </table>
      <div style="margin-top: 24px; background: #f7f7f5; border-radius: 8px; padding: 20px;">
        <p style="font-size: 12px; color: #888; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
        <p style="font-size: 15px; color: #1a1a1a; margin: 0; line-height: 1.6;">${message}</p>
      </div>
      <div style="margin-top: 24px; text-align: center;">
        <a href="mailto:${email}?subject=Re: Tolotech Inquiry" style="display: inline-block; background: #1B2B4B; color: #fff; padding: 12px 28px; border-radius: 99px; font-size: 14px; font-weight: 600; text-decoration: none;">Reply to ${name} →</a>
      </div>
    </div>
    <div style="background: #f7f7f5; padding: 16px 32px; text-align: center;">
      <p style="font-size: 12px; color: #aaa; margin: 0;">Submitted via tolotech.net • ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST</p>
    </div>
  </div>
</body>
</html>`;

    // ── Send Email via Resend ──
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Tolotech Website <notifications@tolotech.net>",
        to: [Deno.env.get("NOTIFY_EMAIL")],
        subject: subject,
        html: emailBody,
        reply_to: email,
      }),
    });

    if (!resendRes.ok) {
      console.error("Resend error:", await resendRes.text());
    } else {
      console.log("Email sent OK");
    }

    // ── Send WhatsApp via Twilio ──
    const twilioSid = Deno.env.get("TWILIO_ACCOUNT_SID");
    const twilioToken = Deno.env.get("TWILIO_AUTH_TOKEN");
    const twilioFrom = Deno.env.get("TWILIO_FROM");
    const twilioTo = Deno.env.get("TWILIO_TO");

    console.log("Twilio secrets check - hasSid:", !!twilioSid, "hasToken:", !!twilioToken, "from:", twilioFrom, "to:", twilioTo);

    const waMessage = `🔔 *New Tolotech Lead*\n\n*Name:* ${name}\n*Email:* ${email}\n*Service:* ${service || "Not specified"}\n*Language:* ${isES ? "Spanish 🇪🇸" : "English 🇺🇸"}\n\n*Message:*\n${message}\n\n_Reply to: ${email}_`;

    const twilioRes = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          "Authorization": `Basic ${btoa(`${twilioSid}:${twilioToken}`)}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          From: `whatsapp:${twilioFrom}`,
          To: `whatsapp:${twilioTo}`,
          Body: waMessage,
        }),
      }
    );

    const twilioBody = await twilioRes.text();
    if (!twilioRes.ok) {
      console.error("Twilio error status:", twilioRes.status, "body:", twilioBody);
    } else {
      console.log("WhatsApp sent OK, status:", twilioRes.status);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("Function error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
