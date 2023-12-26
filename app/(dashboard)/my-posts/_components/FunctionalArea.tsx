'use client'
import { useContext } from 'react'
import { FilterContext, FilterContextType } from '@/components/FilterContextProvider'
import { IPostItem } from '@/interfaces/posts.interface'
import FilterSelection from '../../_components/FilterSelection'

export default function FunctionalArea() {
  const { myPostFilters } = useContext(FilterContext) as FilterContextType<IPostItem>

  return <FilterSelection filterContexts={myPostFilters} className='min-w-[110px]' />
}
