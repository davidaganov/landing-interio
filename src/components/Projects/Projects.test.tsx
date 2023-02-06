import { render } from "@testing-library/react"
import { Projects } from "./Projects"

describe("Projects component", () => {
  it("Projects renders", () => {
    const { container } = render(<Projects />)
    expect(container.firstChild).toBeTruthy()
  })
})
