import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limit (per server instance). Good enough for a
// personal site; swap for a real store (Upstash/Redis) if you deploy
// somewhere with multiple instances.
const recentSubmissions = new Map<string, number>();
const WINDOW_MS = 60_000; // 1 minute
const MAX_PER_WINDOW = 3;

function isRateLimited(ip: string) {
  const now = Date.now();
  const last = recentSubmissions.get(ip);
  if (last && now - last < WINDOW_MS) return true;
  recentSubmissions.set(ip, now);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are all required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "That email address doesn't look right." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 400 }
      );
    }

    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages sent — please try again in a minute." },
        { status: 429 }
      );
    }

    // ── Plug in real delivery here ─────────────────────────────
    // This is the one place you need to wire up to actually receive
    // messages. A few easy options:
    //
    // 1) Resend (recommended, free tier): https://resend.com/docs/send-with-nextjs
    //      import { Resend } from "resend";
    //      const resend = new Resend(process.env.RESEND_API_KEY);
    //      await resend.emails.send({
    //        from: "Portfolio <onboarding@resend.dev>",
    //        to: "you@example.com",
    //        subject: `New message from ${name}`,
    //        text: message,
    //        replyTo: email,
    //      });
    //
    // 2) Forward to a Slack/Discord webhook with fetch().
    // 3) Save to a database (Postgres/Supabase) and check it later.
    //
    // For now we just log it server-side so the flow works out of the box.
    console.log("New contact form submission:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Unexpected error. Please try again." },
      { status: 500 }
    );
  }
}
