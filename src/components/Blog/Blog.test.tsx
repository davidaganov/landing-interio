import { render } from "@testing-library/react"
import { Blog } from "./Blog"

describe("Blog component", () => {
  it("Blog renders", () => {
    const { container } = render(<Blog />)
    expect(container.firstChild).toBeTruthy()
  })
})
