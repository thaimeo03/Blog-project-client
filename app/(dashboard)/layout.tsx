import FilterContextProvider from '@/components/FilterContextProvider'
import Header from '@/components/Header'
import ProtectedRoutes from '@/components/ProtectedRoutes'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Dashboard'
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoutes>
      <FilterContextProvider>
        <Header />
        <div className='md:container px-2 min-h-screen h-full'>{children}</div>
        <Footer />
      </FilterContextProvider>
    </ProtectedRoutes>
  )
}
