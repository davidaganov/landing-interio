import { render } from "@testing-library/react"
import { Footer } from "./Footer"

describe("Footer component", () => {
  it("Footer renders", () => {
    const { container } = render(<Footer />)
    expect(container.firstChild).toBeTruthy()
  })
})
