import { DataResponse } from './response.interface'

export interface ICreatePostForm {
  title: string
  thumbnail?: string
  content?: string
}

export type ICreatePostSuccess = DataResponse<{
  id: string
  thumbnail: string | null
  content: string | null
  createdAt: string
  updatedAt: string
}>
