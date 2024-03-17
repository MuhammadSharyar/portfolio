import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const formData = await req.json();

  if (Object.values(formData).some((v) => v === null || v === "")) {
    return Response.json({ error: "please fill all fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["msharyar064@gmail.com"],
      subject: "Message from your Portfolio",
      html: `
          <h2>Sender Name: ${formData.name}</h2>
          <h2>Sender Email: ${formData.email}</h2>
          <p>Message: ${formData.message}</p>
        `,
    });

    return Response.json({ message: "request successful" }, { status: 201 });
  } catch (error) {
    return Response.json({ message: "request failed", error }, { status: 500 });
  }
}
