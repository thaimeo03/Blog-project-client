import { ErrorResponse } from '@/interfaces/response.interface'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getErrorFromResponse = (error: ErrorResponse) => {
  if (error.response) {
    if (typeof error.response.data.message === 'string') {
      return error.response.data.message
    } else {
      return error.response.data.message[0]
    }
  }
  return 'Something went wrong'
}
