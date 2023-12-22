import {
  ICreatePostForm,
  ICreatePostSuccess,
  IGetAllPostsSuccess,
  IGetPostByIdSuccess
} from '@/interfaces/posts.interface'
import api, { URL } from './api'

export const createPostApi = async (data: ICreatePostForm) => {
  const res = await api.post<ICreatePostSuccess>(`${URL}/posts`, data)
  return res.data
}

export const getAllPostsApi = async (filters: string) => {
  const res = await api.get<IGetAllPostsSuccess>(`${URL}/posts?${filters}`)
  return res.data
}

export const getPostByIdApi = async (id: string) => {
  const res = await api.get<IGetPostByIdSuccess>(`${URL}/posts/${id}`)
  return res.data
}
