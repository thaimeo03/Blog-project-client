import GoogleAuth from './_components/GoogleAuth'

export const metadata = {
  title: 'Authentication'
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <GoogleAuth>{children}</GoogleAuth>
}
