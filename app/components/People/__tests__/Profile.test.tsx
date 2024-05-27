import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Profile from "../Profile"
import "@testing-library/jest-dom"
import { MockPerson } from "@/mocks/data"

describe("Profile", () => {
  it("renders Profile with given data", () => {
    render(<Profile data={MockPerson} />)

    expect(screen.getByText(MockPerson.name)).toBeInTheDocument()
    expect(screen.getByText(MockPerson.birth_year)).toBeInTheDocument()
    expect(screen.getByText(MockPerson.eye_color)).toBeInTheDocument()
    expect(screen.getByText(MockPerson.gender)).toBeInTheDocument()
    expect(screen.getByText(MockPerson.hair_color)).toBeInTheDocument()
    expect(screen.getByText(MockPerson.height)).toBeInTheDocument()
    expect(screen.getByText(MockPerson.homeworld)).toBeInTheDocument()
    expect(screen.getByText(MockPerson.skin_color)).toBeInTheDocument()
    // Add more assertions for the rest of the profile details
  })
})
