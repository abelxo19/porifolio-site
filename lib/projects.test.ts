import { describe, expect, it } from "vitest"
import { getProjectActionKind, projects } from "./projects"

describe("projects", () => {
  it("lists unique titled projects with required display fields", () => {
    const titles = projects.map((project) => project.title)

    expect(projects.length).toBeGreaterThanOrEqual(6)
    expect(new Set(titles).size).toBe(titles.length)

    for (const project of projects) {
      expect(project.title).toBeTruthy()
      expect(project.description.length).toBeGreaterThan(20)
      expect(project.image.startsWith("/")).toBe(true)
      expect(project.tags.length).toBeGreaterThan(0)
      expect(project.primaryLink).toBeTruthy()
      expect(project.primaryLabel).toBeTruthy()
    }
  })

  it("maps visit labels to the visit action kind", () => {
    expect(getProjectActionKind("Visit Site")).toBe("visit")
    expect(getProjectActionKind("Demo")).toBe("external")
  })
})
