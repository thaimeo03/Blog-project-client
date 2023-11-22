import { DataResponse } from './response.interface'

export interface RegisterForm {
  name: string
  email: string
  password: string
  confirm_password: string
}

export interface LoginForm {
  email: string
  password: string
}

export type AuthSuccess = DataResponse<{
  access_token: string
  refresh_token: string
}>
