'use client'
import { Button } from '@/components/ui/button'
import Editor from './Editor'
import { useContext, useState } from 'react'
import Input from '@/components/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ICreatePostSchema } from '@/common/schemas/posts.schema'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPostApi, getAllPostsApi } from '@/apis/posts.api'
import { ErrorResponse } from '@/interfaces/response.interface'
import { toast } from '@/components/ui/use-toast'
import { getErrorFromResponse } from '@/lib/utils'
import { uploadImageApi } from '@/apis/medias.api'
import { FilterContext, FilterContextType } from '@/components/FilterContextProvider'
import { IPostFilter } from '@/interfaces/posts.interface'

interface ICreatePost {
  title: string
  thumbnail?: any
}

export default function CreatePostSide() {
  const queryClient = useQueryClient()
  const { postFilters } = useContext(FilterContext) as FilterContextType<IPostFilter>
  // Content post
  const [content, setContent] = useState('')

  // Initialize react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ICreatePost>({
    resolver: yupResolver(ICreatePostSchema)
  })

  // Upload image mutation
  const uploadImageMutation = useMutation({
    mutationFn: (data: File) => uploadImageApi(data)
  })

  // Create post mutation
  const createPostMutation = useMutation({
    mutationFn: (data: ICreatePost) => createPostApi(data)
  })

  const handleSubmitForm = async (data: ICreatePost) => {
    try {
      // Upload image before create post
      const imageResponse = await uploadImageMutation.mutateAsync(data.thumbnail[0])
      const createPostData = {
        ...data,
        thumbnail: imageResponse.data.url,
        content
      }
      // Create post and fetch data again
      const createPostResponse = await createPostMutation.mutateAsync(createPostData)
      await queryClient.prefetchQuery({
        queryKey: ['posts'],
        queryFn: () => getAllPostsApi(postFilters.queryParams)
      })
      // Reset form
      setContent('')
      reset()
      // Show toast
      toast({
        title: createPostResponse.message as string
      })
    } catch (error: any | ErrorResponse) {
      toast({
        title: getErrorFromResponse(error),
        variant: 'destructive'
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div>
        <label htmlFor='title'>Title</label>
        <Input id='title' type='text' register={register('title')} errors={errors?.title} />
      </div>
      <div className='mt-5'>
        <label htmlFor='thumbnail'>Thumbnail</label>
        <div>
          <Input
            className='block py-1 px-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
            id='file_input'
            type='file'
            register={register('thumbnail')}
            errors={errors?.thumbnail}
          />
        </div>
      </div>
      <div className='mt-5'>
        <h2>Content</h2>
        <Editor content={content} setContent={setContent} />
      </div>
      <div className='flex justify-end'>
        <Button variant='outline' className='border-emerald-500 hover:bg-emerald-500 mt-3'>
          Create
        </Button>
      </div>
    </form>
  )
}
