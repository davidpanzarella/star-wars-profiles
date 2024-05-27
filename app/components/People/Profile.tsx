import React, { Suspense } from "react"
import Image from "next/image"
import { Person } from "@/app/lib/interfaces"
import ListComponent from "@/app/components/ListComponent"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

interface ProfileProps {
  data: Person
}

const Profile: React.FC<ProfileProps> = ({ data }) => {
  const {
    birth_year,
    eye_color,
    films,
    gender,
    hair_color,
    height,
    homeworld,
    id,
    mass,
    name,
    skin_color,
    species,
    starships,
    url,
  } = data

  return (
    <article className="container mx-auto p-8 flex flex-col items-center">
      <header className="flex flex-col items-center space-x-4">
        <Link
          className="flex flex-col items-center space-x-2"
          href={url}
          role="link"
          target="_blank"
          title={`View ${name} on SWAPI website`}
        >
          <Image
            alt={`${name} Avatar`}
            className="rounded-full"
            height={160}
            src={`/images/people/${id}.jpg`}
            style={{
              aspectRatio: "160/160",
              objectFit: "cover",
            }}
            width={160}
          />
          <h1 className="font-medium text-4xl text-gray-900 dark:text-gray-100">
            {name}
          </h1>
        </Link>
        <div className="flex items-center space-x-4 mt-2 text-gray-500 dark:text-gray-400">
          <Link
            href={url}
            role="link"
            target="_blank"
            title={`View ${name} on SWAPI website`}
          >
            View on SWAPI
          </Link>
        </div>
      </header>
      <section className="max-w-3xl w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded-lg">
                <strong>Birth Year:</strong>
                <span>{birth_year}</span>
              </li>
              <li className="flex items-center justify-between bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded-lg">
                <strong>Eye Color:</strong>
                <span>{eye_color}</span>
              </li>
              <li className="flex items-center justify-between bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded-lg">
                <strong>Gender:</strong>
                <span>{gender}</span>
              </li>
              <li className="flex items-center justify-between bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded-lg">
                <strong>Hair Color:</strong>
                <span>{hair_color}</span>
              </li>
              <li className="flex items-center justify-between bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded-lg">
                <strong>Height:</strong>
                <span>{height}</span>
              </li>
              <li className="flex items-center justify-between bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded-lg">
                <strong>Homeworld:</strong>
                <span>{homeworld}</span>
              </li>
              <li className="flex items-center justify-between bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded-lg">
                <strong>Mass:</strong>
                <span>{mass}</span>
              </li>
              <li className="flex items-center justify-between bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded-lg">
                <strong>Skin Color:</strong>
                <span>{skin_color}</span>
              </li>
              <li className="flex items-center justify-between bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded-lg">
                <strong>Species:</strong>
                <span>{species}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <div className="max-w-3xl w-full grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Starships</CardTitle>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading starships...</div>}>
                <ListComponent urls={starships} type="starship" />
              </Suspense>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Films</CardTitle>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading films...</div>}>
                <ListComponent urls={films} type="film" />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </section>
    </article>
  )
}

export default Profile
