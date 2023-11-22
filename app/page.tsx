import ProtectedRoutes from '@/components/ProtectedRoutes'

export default function Home() {
  return (
    <ProtectedRoutes>
      <main className='text-xl text-blue-500 font-bold'>Hello world</main>
    </ProtectedRoutes>
  )
}
