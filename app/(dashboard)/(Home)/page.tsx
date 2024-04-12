import FunctionalArea from './_components/FunctionalArea'
import PostList from '../_components/PostList'

export default function Home() {
  return (
    <main className='mt-3 h-full'>
      <div className='grid grid-cols-6'>
        <div className='col-span-1'>
          <div className='fixed'>
            <FunctionalArea />
          </div>
        </div>
        <div className='col-span-5'>
          <PostList />
        </div>
      </div>
    </main>
  )
}
