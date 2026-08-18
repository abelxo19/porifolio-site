import { describe, expect, it } from "vitest"
import { technologies } from "./skills-data"

describe("technologies", () => {
  it("includes unique skills with logos and categories", () => {
    const names = technologies.map((tech) => tech.name)

    expect(technologies.length).toBeGreaterThanOrEqual(10)
    expect(new Set(names).size).toBe(names.length)

    for (const tech of technologies) {
      expect(tech.name).toBeTruthy()
      expect(tech.logo.startsWith("/tech/")).toBe(true)
      expect(tech.category).toBeTruthy()
    }
  })
})
