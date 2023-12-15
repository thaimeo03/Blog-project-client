import { ICreatePostForm, ICreatePostSuccess } from '@/interfaces/posts.interface'
import api, { URL } from './api'

export const createPostApi = async (data: ICreatePostForm) => {
  const res = await api.post<ICreatePostSuccess>(`${URL}/posts`, data)
  return res.data
}
