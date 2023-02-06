import { render, screen } from "@testing-library/react"
import { Card } from "./Card"

const data = {
  id: 1,
  number: 1,
  details: "Lorem, ipsum",
  title: "Card",
  description: "Dolor sit"
}

describe("Card component", () => {
  it("Card renders", () => {
    render(<Card data={data} />)
    expect(screen.getByText(/card/i))
  })
})
