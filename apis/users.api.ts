import { IAuthSuccess, ILoginForm, IProfileUser, IRegisterForm } from '@/interfaces/users.interface'
import axios from 'axios'
import api, { URL } from './api'
import { MessageResponse } from '@/interfaces/response.interface'

export const registerApi = async (data: IRegisterForm) => {
  const res = await axios.post<IAuthSuccess>(`${URL}/users/register`, data)
  return res.data
}

export const loginApi = async (data: ILoginForm) => {
  const res = await axios.post<IAuthSuccess>(`${URL}/users/login`, data)
  return res.data
}

export const logoutApi = async () => {
  const refresh_token = localStorage.getItem('refresh_token')
  const res = await api.post<MessageResponse>(`${URL}/users/logout`, {
    refresh_token
  })
  return res.data
}

export const getIProfileUserApi = async () => {
  const res = await api.get<IProfileUser>(`${URL}/users/profile`)
  return res.data
}
