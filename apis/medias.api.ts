import { IUploadImageSuccess } from '@/interfaces/medias.interface'
import api, { URL } from './api'
import { MessageResponse } from '@/interfaces/response.interface'

export const uploadImageApi = async (file: File) => {
  const formData = new FormData()
  formData.append('image', file)

  const res = await api.post<IUploadImageSuccess>(`${URL}/medias/upload-image`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  return res.data
}

export const deleteImagesApi = async (urls: string[]) => {
  const res = await api.delete<MessageResponse>(`${URL}/medias/images`, urls)
  return res.data
}
