import BlogAccounts from './_components/BlogAccounts'

export default function Admin() {
  return (
    <div className='grid grid-cols-2 h-full'>
      <div className='col-span-1 border-r-2 border-blue-500'>Approve blog...</div>
      <div className='col-span-1 pl-4 pt-4'>
        <BlogAccounts />
      </div>
    </div>
  )
}
