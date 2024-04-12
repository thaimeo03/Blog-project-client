'use client'

import { AuthContext, AuthContextType } from '@/app/(auth)/_components/AuthContextProvider'
import { ROLE } from '@/common/constants/role.constant'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export default function AdminProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { auth } = useContext(AuthContext) as AuthContextType

  if (auth.profile.role !== ROLE.ADMIN) {
    router.back()
  }

  return <>{children}</>
}
