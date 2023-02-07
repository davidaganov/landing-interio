import { render } from "@testing-library/react"
import { Services } from "./Services"

describe("Services component", () => {
  it("Services renders", () => {
    const { container } = render(<Services />)
    expect(container.firstChild).toBeTruthy()
  })
})
