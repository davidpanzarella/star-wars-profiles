import { Film, Starship, Person, NormalizedItem } from "@/app/lib/interfaces"
import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// generic helper function to fetch multiple URLs
export async function fetchAllUrls(urls: string[]) {
  return Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url)
      return response.json()
    })
  )
}

// helper function to extract ID from URL (for images)
export function extractIdFromUrl(url: string): string {
  const matches = url.match(/\/([0-9]*)\/$/)
  return matches ? matches[1] : ""
}

export function normalizeItem(
  items: (Film | Starship | Person)[],
  type: "film" | "starship" | "person"
): NormalizedItem[] {
  return items.map((item) => {
    switch (type) {
      case "film": {
        const film = item as Film
        return {
          id: film.url,
          nameOrTitle: film.title,
          characteristic1: film.director,
          characteristic2: format(film.release_date, "yyyy"),
        }
      }
      case "starship": {
        const starship = item as Starship
        return {
          id: starship.url,
          nameOrTitle: starship.name,
          characteristic1: starship.model,
          characteristic2: starship.manufacturer,
        }
      }
      default: {
        const person = item as Person
        return {
          id: person.url,
          nameOrTitle: person.name,
          characteristic1: person.gender,
          characteristic2: person.birth_year,
        }
      }
    }
  })
}
