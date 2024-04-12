import React from 'react'
import { DataTable } from './DataTable'
import { columns } from './ApproveBlogColumn'
import { IBlogInfoForAdmin } from '@/interfaces/posts.interface'
import { BLOG_STATUS } from '@/common/constants/role.constant'

export default function ApproveBlogSide() {
  // Fetch data from your API here.
  const data = [
    {
      id: '1',
      title: 'Blog 1',
      status: BLOG_STATUS.ACCEPTED,
      createdAt: '2022-01-01'
    },
    {
      id: '2',
      title: 'Blog 2',
      status: BLOG_STATUS.PENDING,
      createdAt: '2022-01-01'
    },
    {
      id: '3',
      title: 'Blog 3',
      status: BLOG_STATUS.REJECTED,
      createdAt: '2022-01-01'
    }
  ] as IBlogInfoForAdmin[]

  return (
    <div>
      <h2 className='text-xl font-bold'>Approve blogs</h2>

      <div className='mt-5'>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
