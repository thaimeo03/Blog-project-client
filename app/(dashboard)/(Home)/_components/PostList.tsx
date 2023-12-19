'use client'
import { getAllPostsApi } from '@/apis/posts.api'
import { useQuery } from '@tanstack/react-query'
import PostItem from './PostItem'
import useQueryWithFilters, { postFilters } from '@/common/hooks/useQueryWithFilters'
import Pagination from '@/components/Pagination'
import { convertObjToQueryString } from '@/lib/utils'

export default function PostList() {
  const { filters, setFilters } = useQueryWithFilters()

  // Get posts
  const {
    data: posts,
    isError,
    isSuccess
  } = useQuery({
    queryKey: ['posts', filters],
    queryFn: () => getAllPostsApi(convertObjToQueryString(filters))
  })

  return (
    <div>
      <section className='mt-12 mx-auto px-4 max-w-screen-xl md:px-8'>
        <div className='text-center'>
          <h1 className='text-3xl text-gray-800 font-semibold'>Blog</h1>
          <p className='mt-3 text-gray-500'>Blogs that are loved by the community. Updated every hour.</p>
        </div>
        {isError ? (
          <div className='text-center text-2xl text-red-600 font-semibold'>Something went wrong</div>
        ) : (
          <div className='mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
            {posts?.data && posts.data.map((items) => <PostItem key={items.id} blog={items} />)}
          </div>
        )}
      </section>
      {isSuccess && posts && <Pagination pagination={posts.pagination} filters={filters} setFilters={setFilters} />}
    </div>
  )
}
