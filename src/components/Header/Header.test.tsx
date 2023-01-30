import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

test("Header render", () => {
  render(<Header />)

  expect(screen.getByText(/elegantly/i)).toBeInTheDocument()
})
