'use client'
import { IPostFilter } from '@/interfaces/posts.interface'
import { useState } from 'react'

// Define filter
export const postFilters = {
  limit: 3, // Hardcode
  page: 1 // Hardcode
}

export default function useQueryWithFilters() {
  // Initialize state
  const [filters, setFilters] = useState<IPostFilter>(postFilters)

  return {
    filters,
    setFilters
  }
}
