import { AuthSuccess, LoginForm, RegisterForm } from '@/interfaces/users.interface'
import axios from 'axios'
import { URL } from './api'

export const registerApi = async (data: RegisterForm) => {
  const res = await axios.post<AuthSuccess>(`${URL}/users/register`, data)
  return res.data
}

export const loginApi = async (data: LoginForm) => {
  const res = await axios.post<AuthSuccess>(`${URL}/users/login`, data)
  return res.data
}
