import HomePage from "@/app/page"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import React from "react"
import { MockPerson } from "@/mocks/data"

import "@testing-library/jest-dom"

describe("HomePage", () => {
  beforeEach(() => {
    render(<HomePage />)
  })

  const searchInput = () => screen.getByPlaceholderText("Search characters...")
  const searchButton = () => screen.getByText("Search")

  it("renders the search bar", () => {
    expect(searchInput()).toBeInTheDocument()
  })

  it("shows loader when searching", async () => {
    fireEvent.change(searchInput(), {
      target: { value: "luke" },
    })
    fireEvent.click(searchButton())
    expect(screen.getByText("Searching...")).toBeInTheDocument()
  })

  it("shows error message when search fails", async () => {
    fireEvent.change(searchInput(), {
      target: { value: "gandolf" },
    })
    fireEvent.click(searchButton())

    await waitFor(() => {
      expect(screen.getByText("Character not found")).toBeInTheDocument()
    })
  })

  it("displays profile details after a successful search", async () => {
    fireEvent.change(searchInput(), {
      target: { value: "luke" },
    })
    fireEvent.click(searchButton())

    await waitFor(() => {
      expect(screen.getByText(MockPerson.name)).toBeInTheDocument()
      expect(screen.getByText(MockPerson.birth_year)).toBeInTheDocument()
      expect(screen.getByText(MockPerson.gender)).toBeInTheDocument()
      // Add more assertions for the rest of the profile details
    })
  })
})
