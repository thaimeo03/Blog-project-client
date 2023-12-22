export default function Skeleton() {
  return (
    <div className='max-w-screen-md w-full mx-auto'>
      <div className='bg-white rounded-lg shadow-md p-4 animate-pulse'>
        {/* Header */}
        <div className='w-2/3 h-4 bg-gray-300 rounded mb-2' />
        {/* Body */}
        <div className='w-full h-8 bg-gray-300 rounded mb-2' />
        <div className='w-full h-8 bg-gray-300 rounded mb-2' />
        <div className='w-full h-8 bg-gray-300 rounded mb-2' />
        <div className='w-full h-8 bg-gray-300 rounded mb-2' />
        <div className='w-1/2 h-8 bg-gray-300 rounded' />
      </div>
    </div>
  )
}
