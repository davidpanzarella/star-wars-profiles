"use client"

import React, { useState } from "react"
import SearchBar from "@/app/components/SearchBar"
import Profile from "@/app/components/People/Profile"
import SkeletonLoader from "@/app/components/People/ProfileLoader"
import { Person } from "@/app/lib/interfaces"

const HomePage: React.FC = () => {
  const [profile, setProfile] = useState<Person | null>(null)
  const [searching, setSearching] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (name: string) => {
    setSearching(true)
    setError(null)
    try {
      const response = await fetch(`/api/swapi/people?name=${name}`)
      if (!response.ok) {
        throw new Error("Character not found")
      }
      const data = await response.json()
      setProfile(data)
    } catch (err: any) {
      setError(err.message)
      setProfile(null)
    } finally {
      setSearching(false)
    }
  }

  const handleReset = () => {
    setProfile(null)
    setError(null)
  }

  return (
    <>
      <SearchBar
        isSearching={searching}
        onSearch={handleSearch}
        onReset={handleReset}
      />
      {searching ? (
        <SkeletonLoader />
      ) : error ? (
        <div className="text-red-500 text-center mt-8">{error}</div>
      ) : profile ? (
        <Profile data={profile} />
      ) : (
        <div className="text-gray-500 text-center mt-4">
          Please search for a character.
        </div>
      )}
    </>
  )
}

export default HomePage
