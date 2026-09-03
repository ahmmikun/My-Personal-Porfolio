import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { checkRateLimit } from "@/lib/rate-limit";
import {
  validationError,
  internalServerError,
  methodNotAllowedError,
  rateLimitExceededError,
} from "@/lib/api-errors";

export async function POST(request: Request) {
  const rateLimit = checkRateLimit();
  if (rateLimit.isLimited) {
    return rateLimitExceededError(rateLimit.resetSeconds);
  }

  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return validationError("Malformed JSON payload in request body.");
    }

    const { username, email, subject, contact_message } = body || {};

    const invalidParams: Array<{ name: string; reason: string }> = [];
    if (!username || typeof username !== "string" || !username.trim()) {
      invalidParams.push({ name: "username", reason: "Field is required and must be a non-empty string" });
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      invalidParams.push({ name: "email", reason: "Field is required and must be a valid email address" });
    }
    if (!contact_message || typeof contact_message !== "string" || !contact_message.trim()) {
      invalidParams.push({ name: "contact_message", reason: "Field is required and must be a non-empty string" });
    }

    if (invalidParams.length > 0) {
      return validationError(
        `Validation failed: ${invalidParams.map((p) => p.name).join(", ")} missing or invalid.`,
        invalidParams
      );
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || "portfolio@salmanahmad.tech",
      to: "xheikhsalman4422@gmail.com",
      subject: `Portfolio Transmission: ${subject || "New Transmission"} from ${username}`,
      text: `Name: ${username}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${contact_message}`,
      html: `
        <div style="font-family: 'Courier New', monospace; background-color: #050505; color: #ffffff; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #0a0a0a; border: 1px solid #333; border-top: 4px solid #FFD300; padding: 30px;">
            <h1 style="color: #FFD300; font-size: 20px; text-transform: uppercase;">New Transmission Received</h1>
            <p><strong>Sender:</strong> ${username} (${email})</p>
            <p><strong>Subject:</strong> ${subject || "Direct Message"}</p>
            <hr style="border: 1px solid #222;" />
            <p>${contact_message.replace(/\n/g, "<br/>")}</p>
            <p style="font-size: 11px; color: #666; margin-top: 30px;">TIMESTAMP: ${new Date().toISOString()}</p>
          </div>
        </div>
      `,
    };

    // Attempt delivery (gracefully handle unconfigured mail env in test/local environments)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log("[Simulated Email Delivery]:", { username, email, subject });
    }

    return NextResponse.json(
      {
        status: "transmitted",
        message: "Email sent successfully",
        timestamp: new Date().toISOString(),
        details: {
          recipient: "Salman Ahmad (ahmmikun)",
          expectedResponse: "Within 24-48 business hours",
        },
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Vary": "Accept, Accept-Encoding",
          ...rateLimit.headers,
        },
      }
    );
  } catch (error) {
    console.error("Error sending transmission:", error);
    return internalServerError("Failed to send transmission due to mail delivery failure.");
  }
}

export async function GET() {
  return methodNotAllowedError("GET", ["POST", "OPTIONS"]);
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Mcp-Session-Id, x-session-id",
    },
  });
}
