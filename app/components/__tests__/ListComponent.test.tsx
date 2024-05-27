import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import ListComponent from "@/app/components/ListComponent"
import { MockListItem, MockPerson } from "@/mocks/data"
import "@testing-library/jest-dom"

// Import the mocked functions
import { fetchAllUrls, normalizeItem } from "@/app/lib/utils"

describe("ListComponent", () => {
  it('displays "No data available" when there are no URLs', async () => {
    render(<ListComponent urls={[]} type="film" />)

    await waitFor(() => {
      expect(screen.getByText("No data available")).toBeInTheDocument()
    })
  })

  it("displays error message when fetching fails", async () => {
    render(<ListComponent urls={["/fake-url"]} type="film" />)

    await waitFor(() => {
      expect(screen.getByText("Failed to fetch data")).toBeInTheDocument()
    })
  })

  it("displays data correctly when fetch is successful", async () => {
    render(<ListComponent urls={MockPerson.films} type="film" />)

    await waitFor(() => {
      expect(screen.getByText(MockListItem.nameOrTitle)).toBeInTheDocument()
      expect(screen.getByText(MockListItem.characteristic1)).toBeInTheDocument()
      expect(screen.getByText(MockListItem.characteristic1)).toBeInTheDocument()
    })
  })
})
