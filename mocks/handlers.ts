import { http, HttpResponse } from "msw"
import { MockPerson, MockFilm } from "@/mocks/data"

export const handlers = [
  // Intercept our get api requests
  http.get("localhost:3000/api/swapi/people?name=luke", () => {
    return HttpResponse.json(MockPerson)
  }),
  http.get("https://swapi.dev/api/films/1/", () => {
    return HttpResponse.json(MockFilm)
  }),
]
