"use client"

import React, { useEffect, useState } from "react"
import { fetchAllUrls, normalizeItem } from "@/app/lib/utils"
import { NormalizedItem, Film, Starship, Person } from "@/app/lib/interfaces"

interface ListComponentProps {
  urls: string[]
  type: "film" | "starship" | "person"
}

const ListComponent: React.FC<ListComponentProps> = ({ urls, type }) => {
  const [data, setData] = useState<NormalizedItem[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchAllUrls(urls)
        const normalizedResults = normalizeItem(results, type)
        setData(normalizedResults)
      } catch (err) {
        setError("Failed to fetch data")
      }
    }
    fetchData()
  }, [urls, type])

  if (error) {
    return <div className="space-y-2">{error}</div>
  }

  if (data.length === 0) {
    return <div className="space-y-2">No data available</div>
  }

  return (
    <ul className="space-y-2">
      {data.map((item) => (
        <li
          className="flex flex-col bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded-lg"
          key={item.id}
        >
          <strong>{item.nameOrTitle}</strong>
          <p>{item.characteristic1}</p>
          <p>{item.characteristic2}</p>
        </li>
      ))}
    </ul>
  )
}

export default ListComponent
