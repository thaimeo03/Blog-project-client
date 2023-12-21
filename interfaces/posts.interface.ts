import { DataResponse, DataResponseWithPagination } from './response.interface'

export interface ICreatePostForm {
  title: string
  thumbnail?: string
  content?: string
}

export interface IPostFilter {
  limit: number
  page: number
  createdAt?: 'desc' | 'asc'
}

export type ICreatePostSuccess = DataResponse<{
  id: string
  thumbnail: string | null
  content: string | null
  createdAt: string
  updatedAt: string
}>

export interface IPostItem {
  id: string
  title: string
  thumbnail: string
  content: string
  createdAt: string
  updatedAt: string
}

export type IGetAllPostsSuccess = DataResponseWithPagination<IPostItem[]>
