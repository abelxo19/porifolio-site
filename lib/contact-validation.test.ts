import { describe, expect, it } from "vitest"
import { validateContactFields } from "./contact-validation"

const validFields = {
  name: "Abel",
  email: "abel@example.com",
  subject: "Project inquiry",
  message: "I'd like to collaborate on a website.",
}

describe("validateContactFields", () => {
  it("accepts a complete contact submission", () => {
    expect(validateContactFields(validFields)).toBeNull()
  })

  it("requires every field", () => {
    expect(validateContactFields({ ...validFields, name: "" })).toBe("All fields are required")
    expect(validateContactFields({ ...validFields, email: "" })).toBe("All fields are required")
    expect(validateContactFields({ ...validFields, subject: "" })).toBe("All fields are required")
    expect(validateContactFields({ ...validFields, message: "" })).toBe("All fields are required")
  })

  it("rejects an email without @", () => {
    expect(validateContactFields({ ...validFields, email: "abel.example.com" })).toBe(
      "Please enter a valid email address",
    )
  })
})
