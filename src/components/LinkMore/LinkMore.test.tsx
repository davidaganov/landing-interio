import { render, screen } from "@testing-library/react"
import { LinkMore } from "./LinkMore"

test("Button render", () => {
  render(<LinkMore href="#">Test</LinkMore>)

  expect(screen.getByRole("link")).toBeInTheDocument()
  expect(screen.getByText(/test/i)).toBeInTheDocument()
})
