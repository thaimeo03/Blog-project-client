'use client'

import { postFilters } from '@/app/(dashboard)/(Home)/_components/PostList'
import { IPostFilter } from '@/interfaces/posts.interface'
import { convertObjToQueryString } from '@/lib/utils'
import { createContext, useState } from 'react'

interface IPostFilterContext {
  filters: IPostFilter
  setFilters: React.Dispatch<React.SetStateAction<IPostFilter>>
  queryParams: string
}

export interface FilterContextType {
  postFilters: IPostFilterContext
}

export const FilterContext = createContext<FilterContextType | null>(null)

export default function FilterContextProvider({ children }: { children: React.ReactNode }) {
  // Post filters initial value
  const [filters, setFilters] = useState<IPostFilter>(postFilters)
  const queryParams = convertObjToQueryString(filters)

  return (
    <FilterContext.Provider value={{ postFilters: { filters, setFilters, queryParams } }}>
      {children}
    </FilterContext.Provider>
  )
}
