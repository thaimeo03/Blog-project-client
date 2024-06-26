import { IUserInfoForAdmin } from '@/interfaces/users.interface'
import { columns } from './BloggerColumn'
import { DataTable } from './DataTable'
import { ROLE } from '@/common/constants/role.constant'

export default function BlogAccounts() {
  // Fetch data from your API here.
  const data = [
    {
      id: '1',
      role: ROLE.USER,
      name: 'John Doe',
      email: 'RrKpJ@example.com'
    },
    {
      id: '2',
      role: ROLE.ADMIN,
      name: 'John Doe',
      email: 'RrKpJ@example.com'
    }
  ] as IUserInfoForAdmin[]

  return (
    <div>
      <h2 className='text-xl font-bold'>Blogger accounts</h2>

      <div className='mt-5'>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
