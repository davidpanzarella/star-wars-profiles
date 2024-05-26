import { fetchAllUrls, extractIdFromUrl } from "@/app/lib/utils"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const name = searchParams.get("name")

  if (!name) {
    return NextResponse.json({ error: "Invalid name" }, { status: 400 })
  }

  const response = await fetch(`https://swapi.dev/api/people/?search=${name}`)
  const data = await response.json()

  if (!response.ok || data.count === 0) {
    return NextResponse.json({ error: "Person not found" }, { status: 404 })
  }

  const person = data.results[0]

  const species =
    person.species.length > 0 ? await fetchAllUrls(person.species) : []
  const speciesType = species.length > 0 ? species[0].name : "Human"
  const planet = await fetchAllUrls([person.homeworld])

  // Fetching films and starships could be done here as well but chose parallel fetching in the component
  // const films = await fetchAllUrls(person.films)
  // const starships = await fetchAllUrls(person.starships)

  const result = {
    ...person,
    id: extractIdFromUrl(person.url),
    homeworld: planet[0].name,
    species: speciesType,
  }

  return NextResponse.json(result, { status: 200 })
}
