import Header from '@/components/Header'
import ProtectedRoutes from '@/components/ProtectedRoutes'

export const metadata = {
  title: 'Dashboard'
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoutes>
      <Header />
      <div className='md:container px-2'>{children}</div>
    </ProtectedRoutes>
  )
}
