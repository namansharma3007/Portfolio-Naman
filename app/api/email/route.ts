import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: name + ": " + email,
      text: message,
    };

    transporter.sendMail(mailOptions).catch((error) => {
      console.log("Error sending message:", error);
      return NextResponse.json(
        { messaage: "Internal server error! 😢" },
        { status: 500 }
      );
    });

    return NextResponse.json(
      { message: "Message sent successfully! 😊" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error sending message:", error);
    return NextResponse.json(
      { messaage: "Internal server error! 😢" },
      { status: 500 }
    );
  }
}
