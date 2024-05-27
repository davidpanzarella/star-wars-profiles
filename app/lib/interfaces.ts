export interface Person {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  id: string
  gender: string
  homeworld: string
  species: string[]
  films: string[]
  starships: string[]
  url: string
}

export interface Film {
  id: string
  title: string
  director: string
  release_date: string
  url: string
}

export interface Starship {
  name: string
  model: string
  manufacturer: string
  url: string
}

export interface NormalizedItem {
  id: string
  nameOrTitle: string
  characteristic1: string
  characteristic2: string
}
