import { DataResponse } from './response.interface'

export interface IUploadImage {
  url: string
  public_id: string
}

export type IUploadImageSuccess = DataResponse<IUploadImage>
