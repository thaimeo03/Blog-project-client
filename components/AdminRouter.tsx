'use client'

import { AuthContext, AuthContextType } from '@/app/(auth)/_components/AuthContextProvider'
import { useContext } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export default function AdminRouter() {
  const router = useRouter()
  const { auth } = useContext(AuthContext) as AuthContextType

  const handleClick = () => {
    router.push('/admin')
  }

  return auth.profile.role === 'ADMIN' ? (
    <Button className='grid place-items-center' onClick={handleClick}>
      Admin page
    </Button>
  ) : (
    <></>
  )
}
