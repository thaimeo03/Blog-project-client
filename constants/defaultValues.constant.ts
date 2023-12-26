import { IPostFilter } from '@/interfaces/posts.interface'

export const postFiltersInitialValue = {
  limit: 3, // Could be change value based on screen size
  page: 1
} as IPostFilter
