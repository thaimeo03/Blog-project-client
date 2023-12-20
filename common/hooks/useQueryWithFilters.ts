'use client'
import { convertObjToQueryString } from '@/lib/utils'
import { useState } from 'react'

export default function useQueryWithFilters<T>(postFilters: T) {
  // Initialize state
  const [filters, setFilters] = useState<T>(postFilters)

  const queryParams = convertObjToQueryString(filters)

  return {
    filters,
    setFilters,
    queryParams
  }
}
