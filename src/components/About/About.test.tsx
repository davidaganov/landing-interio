import { render } from "@testing-library/react"
import { About } from "./About"

describe("About component", () => {
  it("About renders", () => {
    const { container } = render(<About />)
    expect(container.firstChild).toBeTruthy()
  })
})
