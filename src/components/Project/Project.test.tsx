import { render, screen } from "@testing-library/react"
import { Project } from "./Project"

const data = {
  id: 1,
  number: 1,
  title: "Project",
  pictures: ["", ""],
  description: "Dolor sit"
}

describe("Project component", () => {
  it("Project renders", () => {
    render(<Project data={data} />)
    expect(screen.getByText(/project/i))
  })
})
