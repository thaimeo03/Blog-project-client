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

export const formatDateFromISO = (date: string) => {
  const dateObject = new Date(date)

  const formattedDate = dateObject.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })

  return formattedDate
}
