import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import SearchBar from "@/app/components/SearchBar"
import "@testing-library/jest-dom"

describe("SearchBar", () => {
  it("renders the search bar with initial elements", () => {
    render(
      <SearchBar isSearching={false} onSearch={vi.fn()} onReset={vi.fn()} />
    )

    expect(
      screen.getByPlaceholderText("Search characters...")
    ).toBeInTheDocument()
    expect(screen.getByText("Star Wars Characters")).toBeInTheDocument()
    expect(
      screen.getByText(
        "Search to find information about your favorite Star Wars characters."
      )
    ).toBeInTheDocument()
  })

  it("enables and disables search button based on input", () => {
    render(
      <SearchBar isSearching={false} onSearch={vi.fn()} onReset={vi.fn()} />
    )

    const searchInput = screen.getByPlaceholderText("Search characters...")
    const searchButton = screen.getByText("Search")

    expect(searchButton).toBeDisabled()
    fireEvent.change(searchInput, { target: { value: "luke" } })
    expect(searchButton).toBeEnabled()
  })

  it("calls onSearch with input value when search button is clicked", () => {
    const onSearchMock = vi.fn()
    render(
      <SearchBar
        isSearching={false}
        onSearch={onSearchMock}
        onReset={vi.fn()}
      />
    )

    const searchInput = screen.getByPlaceholderText("Search characters...")
    const searchButton = screen.getByText("Search")

    fireEvent.change(searchInput, { target: { value: "luke" } })
    fireEvent.click(searchButton)

    expect(onSearchMock).toHaveBeenCalledWith("luke")
  })

  it("handles Enter and Escape key events", () => {
    const onSearchMock = vi.fn()
    const onResetMock = vi.fn()
    render(
      <SearchBar
        isSearching={false}
        onSearch={onSearchMock}
        onReset={onResetMock}
      />
    )

    const searchInput = screen.getByPlaceholderText("Search characters...")

    // Handle Enter key
    fireEvent.change(searchInput, { target: { value: "luke" } })
    fireEvent.keyDown(searchInput, { key: "Enter", code: "Enter" })
    expect(onSearchMock).toHaveBeenCalledWith("luke")

    // Handle Escape key
    fireEvent.change(searchInput, { target: { value: "luke" } })
    fireEvent.keyDown(searchInput, { key: "Escape", code: "Escape" })
    expect(onResetMock).toHaveBeenCalled()
  })

  it("disables search button when input is empty", () => {
    render(
      <SearchBar isSearching={false} onSearch={vi.fn()} onReset={vi.fn()} />
    )

    const searchInput = screen.getByPlaceholderText("Search characters...")
    const searchButton = screen.getByText("Search")

    fireEvent.change(searchInput, { target: { value: "" } })
    expect(searchButton).toBeDisabled()
  })
})
