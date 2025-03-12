"use server"

import { Resend } from "resend"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !subject || !message) {
      return { error: "All fields are required" }
    }

    if (!email.includes("@")) {
      return { error: "Please enter a valid email address" }
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // You can customize this
      to: "abelaatkelet@gmail.com",
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    })

    if (error) {
      return { error: error.message }
    }

    return { success: "Your message has been sent successfully!" }
  } catch (error) {
    console.error(error);
    return { error: "Failed to send message. Please try again later." }
  }
}

