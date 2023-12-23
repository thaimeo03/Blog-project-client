import { DataResponse } from './response.interface'

export interface IRegisterForm {
  name: string
  email: string
  password: string
  confirm_password: string
}

export interface ILoginForm {
  email: string
  password: string
}

export interface IUser {
  id: string
  name: string
  email: string
  avatar: string | null
  address: string | null
  birthday: string | null
  createdAt: string
  updatedAt: string
}

export interface IUpdateProfile {
  name: string
  email: string
  address: string | null
  birthday: string | null
}

export type IAuthSuccess = DataResponse<{
  access_token: string
  refresh_token: string
}>

export type IRefreshTokenSuccess = DataResponse<{
  access_token: string
}>

export type IProfileUser = DataResponse<{
  user: IUser
}>
