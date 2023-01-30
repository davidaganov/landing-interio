import { render, screen } from "@testing-library/react"
import { Logo } from "./Logo"

test("Logo render", () => {
  render(<Logo />)

  expect(screen.getByRole("link")).toBeInTheDocument()
})
