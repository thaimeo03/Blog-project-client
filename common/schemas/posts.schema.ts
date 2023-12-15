import * as yup from 'yup'

const VALID_FILE_TYPES = ['image/jpeg', 'image/png', 'image/jpg']
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 1 MB

export const ICreatePostSchema = yup.object({
  title: yup.string().required(),
  thumbnail: yup
    .mixed()
    .test('fileType', 'Invalid file type', (value: any) => {
      if (!value || !(value as FileList)[0] || !(value as FileList)[0]) {
        return true
      }
      return VALID_FILE_TYPES.includes((value as FileList)[0].type)
    })
    .test('fileSize', 'File size exceeded', (value: any) => {
      if (!value || !(value as FileList)[0] || !(value as FileList)[0]) {
        return true
      }
      return (value as FileList)[0].size <= MAX_FILE_SIZE
    })
})
