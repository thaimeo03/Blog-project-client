'use client'

import { postFiltersInitialValue } from '@/app/(dashboard)/(Home)/_components/PostList'
import { IPostFilter } from '@/interfaces/posts.interface'
import { convertObjToQueryString } from '@/lib/utils'
import { createContext, useMemo, useState } from 'react'

export interface IFilterContext<T> {
  filters: T
  setFilters: React.Dispatch<React.SetStateAction<T>>
  queryParams: string
}

export interface FilterContextType<T> {
  postFilters: IFilterContext<T>
}

export const FilterContext = createContext<FilterContextType<any> | null>(null)

export default function FilterContextProvider({ children }: { children: React.ReactNode }) {
  // Post filters initial value
  const [postFilters, setPostFilters] = useState<IPostFilter>(postFiltersInitialValue)
  const postQueryParams = useMemo(() => convertObjToQueryString(postFilters), [postFilters])
  const postFiltersMerge = { filters: postFilters, setFilters: setPostFilters, queryParams: postQueryParams }

  return <FilterContext.Provider value={{ postFilters: postFiltersMerge }}>{children}</FilterContext.Provider>
}
