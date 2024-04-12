import AdminProtectedRoute from './_components/AdminProtectedRoute'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AdminProtectedRoute>{children}</AdminProtectedRoute>
}
