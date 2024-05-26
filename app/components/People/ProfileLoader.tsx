import React from "react"

const ProfileSkeleton: React.FC = () => {
  return (
    <article className="container mx-auto p-8 flex flex-col items-center">
      <header className="flex flex-col items-center space-x-4 animate-pulse">
        <div className="rounded-full bg-gray-300 dark:bg-gray-700 h-40 w-40"></div>
        <div className="flex flex-col items-center space-x-2 mt-4">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-40 mt-2"></div>
        </div>
      </header>
      <section className="max-w-3xl w-full grid md:grid-cols-2 gap-8 py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="bg-gray-300 dark:bg-gray-700 h-8 w-24 rounded"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-full rounded"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-full rounded"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-full rounded"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-full rounded"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-full rounded"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-full rounded"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-full rounded"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-full rounded"></div>
        </div>
        <div className="space-y-8">
          <div className="bg-gray-300 dark:bg-gray-700 h-8 w-24 rounded"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-full rounded"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-full rounded"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-full rounded"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-full rounded"></div>
        </div>
      </section>
    </article>
  )
}

export default ProfileSkeleton
