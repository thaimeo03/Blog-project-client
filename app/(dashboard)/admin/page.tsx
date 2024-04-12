import ApproveBlogSide from './_components/ApproveBlogSide'
import BlogAccounts from './_components/BlogAccounts'

export default function Admin() {
  return (
    <div className='grid grid-cols-2 min-h-screen'>
      <div className='col-span-1 border-r-2 border-blue-500 pt-4 pr-4'>
        <ApproveBlogSide />
      </div>
      <div className='col-span-1 pl-4 pt-4'>
        <BlogAccounts />
      </div>
    </div>
  )
}
