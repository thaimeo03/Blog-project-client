import MyPostList from './_components/MyPostList'

import FunctionalArea from './_components/FunctionalArea'

export default function MyPosts() {
  return (
    <main className='mt-3'>
      <div className='grid grid-cols-6'>
        <div className='col-span-1'>
          <div className='fixed'>
            <FunctionalArea />
          </div>
        </div>
        <div className='col-span-5'>
          <MyPostList />
        </div>
      </div>
    </main>
  )
}
