import { render } from "@testing-library/react"
import { App } from "./App"

describe("App component", () => {
  it("App renders", () => {
    const { container } = render(<App />)
    expect(container.firstChild).toBeTruthy()
  })
})
