'use client'

import { IUser } from '@/interfaces/users.interface'
import { createContext, useState } from 'react'

interface Auth {
  isAuth: boolean
  profile: IUser
}

export interface AuthContextType {
  auth: Auth
  setAuth: React.Dispatch<React.SetStateAction<Auth>>
}

export const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<Auth>({
    isAuth: false,
    profile: {} as IUser
  })

  return <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}>{children}</AuthContext.Provider>
}
