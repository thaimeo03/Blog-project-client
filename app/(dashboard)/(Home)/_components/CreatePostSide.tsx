'use client'
import { Button } from '@/components/ui/button'
import Editor from './Editor'
import { useState } from 'react'
import Input from '@/components/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ICreatePostSchema } from '@/common/schemas/posts.schema'
import { useMutation } from '@tanstack/react-query'
import { createPostApi } from '@/apis/posts.api'
import { ErrorResponse } from '@/interfaces/response.interface'
import { toast } from '@/components/ui/use-toast'
import { getErrorFromResponse } from '@/lib/utils'
import { uploadImageApi } from '@/apis/medias.api'

interface ICreatePost {
  title: string
  thumbnail?: any
}

export default function CreatePostSide() {
  // Content post
  const [content, setContent] = useState('')

  // Initialize react hook form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ICreatePost>({
    resolver: yupResolver(ICreatePostSchema)
  })

  // Upload image mutation
  const uploadImageMutation = useMutation({
    mutationFn: (data: File) => uploadImageApi(data),
    onSuccess: (result) => {
      console.log(result)
    },
    onError: (error: ErrorResponse) => {
      toast({
        title: getErrorFromResponse(error),
        variant: 'destructive'
      })
    }
  })

  // Create post mutation
  const createPostMutation = useMutation({
    mutationFn: (data: ICreatePost) => createPostApi(data),
    onSuccess: (result) => {
      console.log(result)
    },
    onError: (error: ErrorResponse) => {
      toast({
        title: getErrorFromResponse(error),
        variant: 'destructive'
      })
    }
  })

  const handleSubmitForm = (data: ICreatePost) => {
    const dataForm = { ...data, content }
    // Upload image before create post
    uploadImageMutation.mutate(dataForm.thumbnail[0])
    // createPostMutation.mutate(dataForm)
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
