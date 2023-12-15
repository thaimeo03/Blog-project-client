import { IUploadImageSuccess } from '@/interfaces/medias.interface'
import api, { URL } from './api'

export const uploadImageApi = async (file: File) => {
  console.log(file)

  const formData = new FormData()
  formData.append('image', file)
  const res = await api.post<IUploadImageSuccess>(`${URL}/medias/upload-image`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  return res.data
}
