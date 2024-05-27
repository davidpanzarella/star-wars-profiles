import { Film, Person } from "@/app/lib/interfaces"

export const MockPerson: Person = {
  birth_year: "19BBY",
  eye_color: "blue",
  films: ["https://swapi.dev/api/films/1/"],
  gender: "male",
  hair_color: "blond",
  height: "172",
  homeworld: "Tatooine",
  id: "1",
  mass: "77",
  name: "Luke Skywalker",
  skin_color: "fair",
  species: ["https://swapi.dev/api/species/1/"],
  starships: ["https://swapi.dev/api/starships/12/"],
  url: "https://swapi.dev/api/people/1/",
}

export const MockFilm: Film = {
  director: "George Lucas",
  id: "1",
  release_date: "1977-05-25",
  title: "A New Hope",
  url: "https://swapi.dev/api/films/1/",
}

export const MockListItem = {
  id: "1",
  nameOrTitle: "A New Hope",
  characteristic1: "1977",
  characteristic2: "George Lucas",
}
