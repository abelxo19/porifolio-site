export type ContactFields = {
  name: string
  email: string
  subject: string
  message: string
}

export function validateContactFields(fields: ContactFields): string | null {
  const { name, email, subject, message } = fields

  if (!name || !email || !subject || !message) {
    return "All fields are required"
  }

  if (!email.includes("@")) {
    return "Please enter a valid email address"
  }

  return null
}
