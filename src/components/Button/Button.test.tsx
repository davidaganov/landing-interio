import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

test("Button render", () => {
  render(
    <Button
      href="#test"
      apperance="primary"
      color="white"
    >
      Test
    </Button>
  )

  expect(screen.getByRole("link")).toBeInTheDocument()
  expect(screen.getByText(/test/i)).toBeInTheDocument()
})
