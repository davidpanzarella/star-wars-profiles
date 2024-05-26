import React, { useState } from "react"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"

interface SearchBarProps {
  isSearching: boolean
  onSearch: (name: string) => void
  onClear: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({
  isSearching,
  onSearch,
  onClear,
}) => {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    if (query.trim() === "") {
      onClear()
    } else {
      onSearch(query)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
    if (e.key === "Escape") {
      setQuery("")
      onClear()
    }
  }

  return (
    <header className="bg-gray-100 dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto p-8 flex flex-col items-center">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Star Wars Characters
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Search to find information about your favorite Star Wars characters.
          </p>
        </div>
        <div className="relative w-full max-w-md">
          <Input
            className="pl-8 pr-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-full"
            disabled={isSearching}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search characters..."
            type="text"
            value={query}
          />
          <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-5 w-5" />
          <Button
            className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 cursor-pointer"
            disabled={isSearching || query.trim() === ""}
            onClick={handleSearch}
          >
            {isSearching ? "Searching..." : "Search"}
          </Button>
        </div>
      </div>
    </header>
  )
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

export default SearchBar
