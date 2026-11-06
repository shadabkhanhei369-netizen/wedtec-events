import nodemailer from "nodemailer";

type ContactInquiry = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  location: string;
  services: string;
  details: string;
};

const namePattern = /^[\p{L}\p{M}][\p{L}\p{M} .’'-]{1,79}$/u;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9][0-9\s().-]{6,19}$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getTextField(payload: Record<string, unknown>, key: string, maxLength: number) {
  const value = payload[key];
  if (typeof value !== "string" || value.length > maxLength) {
    return null;
  }
  return value.trim();
}

function getSmtpConfig() {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    CONTACT_EMAIL_TO,
  } = process.env;
  const port = Number(SMTP_PORT);

  if (
    !SMTP_HOST ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    (SMTP_SECURE !== "true" && SMTP_SECURE !== "false") ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !SMTP_FROM ||
    !CONTACT_EMAIL_TO
  ) {
    return null;
  }

  return {
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE === "true",
    user: SMTP_USER,
    pass: SMTP_PASS,
    from: SMTP_FROM,
    to: CONTACT_EMAIL_TO,
  };
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Invalid request. Please check the form and try again." }, { status: 400 });
  }

  if (!isRecord(payload)) {
    return Response.json({ message: "Invalid request. Please check the form and try again." }, { status: 400 });
  }

  const name = getTextField(payload, "name", 80);
  const email = getTextField(payload, "email", 254);
  const phone = getTextField(payload, "phone", 20);
  const eventType = getTextField(payload, "eventType", 100);
  const eventDate = getTextField(payload, "eventDate", 10);
  const guestCount = getTextField(payload, "guestCount", 10);
  const location = getTextField(payload, "location", 200);
  const services = getTextField(payload, "services", 100);
  const details = getTextField(payload, "details", 2000);

  if (
    name === null ||
    email === null ||
    phone === null ||
    eventType === null ||
    eventDate === null ||
    guestCount === null ||
    location === null ||
    services === null ||
    details === null
  ) {
    return Response.json({ message: "Some form values are invalid or too long. Please review them and try again." }, { status: 400 });
  }

  const inquiry: ContactInquiry = {
    name,
    email,
    phone,
    eventType,
    eventDate,
    guestCount,
    location,
    services,
    details,
  };

  if (
    !namePattern.test(inquiry.name) ||
    !emailPattern.test(inquiry.email) ||
    (inquiry.phone && !phonePattern.test(inquiry.phone)) ||
    !inquiry.eventType ||
    (inquiry.eventDate && !/^\d{4}-\d{2}-\d{2}$/.test(inquiry.eventDate)) ||
    (inquiry.guestCount && !/^[1-9]\d{0,5}$/.test(inquiry.guestCount)) ||
    inquiry.details.length < 10
  ) {
    return Response.json({ message: "Please check the required fields and make sure they are valid." }, { status: 400 });
  }

  const smtp = getSmtpConfig();
  if (!smtp) {
    return Response.json(
      { message: "The contact form is not configured yet. Please email us directly." },
      { status: 503 },
    );
  }

  const message = [
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone || "Not provided"}`,
    `Event type: ${inquiry.eventType}`,
    `Event date: ${inquiry.eventDate || "Not provided"}`,
    `Estimated guest count: ${inquiry.guestCount || "Not provided"}`,
    `Location or venue: ${inquiry.location || "Not provided"}`,
    `Services: ${inquiry.services || "Not specified"}`,
    "",
    "About the plans:",
    inquiry.details,
  ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: { user: smtp.user, pass: smtp.pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });

    await transporter.sendMail({
      from: { name: "WEDTEC EVENTS", address: smtp.from },
      to: smtp.to,
      replyTo: inquiry.email,
      subject: "Wedding & Event Booking Inquiry",
      text: message,
    });
  } catch (error) {
    const errorDetails = isRecord(error) ? error : {};
    const errorCode = typeof errorDetails.code === "string" ? errorDetails.code : undefined;
    console.error("Failed to send contact inquiry email:", {
      code: errorCode,
      command: errorDetails.command,
      responseCode: errorDetails.responseCode,
    });

    if (errorCode === "EAUTH") {
      return Response.json(
        { message: "Email authentication failed. Check the server's Gmail App Password settings." },
        { status: 502 },
      );
    }

    return Response.json(
      { message: "We couldn't send your inquiry right now. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Thank you! Your inquiry has been sent. We’ll be in touch soon." });
}
