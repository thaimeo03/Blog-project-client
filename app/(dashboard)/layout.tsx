import Header from '@/components/Header'
import ProtectedRoutes from '@/components/ProtectedRoutes'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoutes>
      <Header />
      {children}
    </ProtectedRoutes>
  )
}
