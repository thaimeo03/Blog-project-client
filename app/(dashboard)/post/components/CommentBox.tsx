import Avatar from '@/components/Avatar'
import React from 'react'

export default function CommentBox() {
  return (
    <div className='flex items-center gap-4'>
      <div className='flex-shrink-0'>
        <Avatar src={''} />
      </div>
      <div className='grid gap-0.5'>
        <div className='flex items-center gap-2'>
          <h3 className='text-sm font-medium tracking-tighter'>Frankie Manning</h3>
          <time className='text-sm text-gray-500 dark:text-gray-400'>2 hours ago</time>
        </div>
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          Love the new feature! Can't wait to see what's coming next.
        </p>
      </div>
    </div>
  )
}
