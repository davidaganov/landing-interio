import { render, screen } from "@testing-library/react"
import { Article } from "./Article"

const data = {
  id: 1,
  title: "Article",
  description: "Dolor sit",
  picture: "pic.jpg"
}

describe("Article component", () => {
  it("Article renders", () => {
    render(<Article data={data} />)
    expect(screen.getByText(/article/i))
  })
})
