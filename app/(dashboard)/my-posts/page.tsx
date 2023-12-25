'use client'
import { useContext } from 'react'
import MyPostList from './_components/MyPostList'
import { FilterContext, FilterContextType } from '@/components/FilterContextProvider'
import { IPostItem } from '@/interfaces/posts.interface'
import FilterSelection from '../_components/FilterSelection'

export default function MyPosts() {
  const { myPostFilters } = useContext(FilterContext) as FilterContextType<IPostItem>

  return (
    <main className='mt-3'>
      <div className='grid grid-cols-6'>
        <div className='col-span-1'>
          <div className='fixed'>
            <FilterSelection filterContexts={myPostFilters} className='min-w-[110px]' />
          </div>
        </div>
        <div className='col-span-5'>
          <MyPostList />
        </div>
      </div>
    </main>
  )
}
