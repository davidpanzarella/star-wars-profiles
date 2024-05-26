import { fetchAllUrls } from "@/app/lib/utils"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get("title")

  if (!title) {
    return NextResponse.json({ error: "Invalid title" }, { status: 400 })
  }

  const response = await fetch(`https://swapi.dev/api/films/?search=${title}`)
  const data = await response.json()

  if (!response.ok || data.count === 0) {
    return NextResponse.json({ error: "Film not found" }, { status: 404 })
  }

  const film = data.results[0]
  const characters = await fetchAllUrls(film.characters)

  const result = {
    ...film,
    characters,
  }

  return NextResponse.json(result, { status: 200 })
}
