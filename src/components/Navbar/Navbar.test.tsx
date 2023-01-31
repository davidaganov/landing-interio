import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Navbar } from "./Navbar"

const data = [
  { link: "#test", title: "Test" },
  { link: "#link", title: "Link" }
]

describe("Navbar component", () => {
  it("Navbar renders", () => {
    render(<Navbar list={data} />)

    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByText(/link/i)).toBeInTheDocument()
    expect(screen.getAllByRole("link")).toHaveLength(data.length + 1)
  })

  it("Opening Navbar by pressing the button", () => {
    render(<Navbar list={data} />)

    expect(screen.getByRole("button", { name: "Open navbar", expanded: false })).toBeInTheDocument()

    userEvent.click(screen.getByRole("button", { name: "Open navbar" }))

    expect(screen.getByRole("button", { name: "Open navbar", expanded: true })).toBeInTheDocument()
  })
})
