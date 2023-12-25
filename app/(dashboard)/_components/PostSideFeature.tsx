'use client'
import { Button } from '@/components/ui/button'
import Editor from './Editor'
import { useState } from 'react'
import Input from '@/components/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ICreatePostSchema } from '@/common/schemas/posts.schema'
import { useMutation } from '@tanstack/react-query'
import { createPostApi, updatePostApi } from '@/apis/posts.api'
import { ErrorResponse, MessageResponse } from '@/interfaces/response.interface'
import { toast } from '@/components/ui/use-toast'
import { getErrorFromResponse } from '@/lib/utils'
import { uploadImageApi } from '@/apis/medias.api'
import { ICreatePostForm, ICreatePostSuccess, IGetPostByIdSuccess, IUpdatePostForm } from '@/interfaces/posts.interface'
import { useRouter } from 'next/navigation'

interface PostSideFeatureProps {
  isUpdate?: boolean
  id?: string
  post?: IGetPostByIdSuccess
}

interface IPostData {
  title: string
  thumbnail?: any
}

export default function PostSideFeature({ isUpdate, id, post }: PostSideFeatureProps) {
  // Content post
  const [content, setContent] = useState(post?.data.content || '')

  // Initialize react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IPostData>({
    resolver: yupResolver(ICreatePostSchema),
    defaultValues: {
      title: post?.data.title || '',
      thumbnail: ''
    }
  })

  // Upload image mutation
  const uploadImageMutation = useMutation({
    mutationFn: (data: File) => uploadImageApi(data)
  })

  // Create post mutation
  const createPostMutation = useMutation({
    mutationFn: (data: ICreatePostForm) => createPostApi(data)
  })

  // Update post mutation
  const updatePostMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: IUpdatePostForm }) => updatePostApi({ id, data })
  })

  const handleSubmitForm = async (data: IPostData) => {
    try {
      // Upload image before create post
      const postData = {
        ...data,
        content
      }
      if (data.thumbnail) {
        const imageResponse = await uploadImageMutation.mutateAsync(data.thumbnail[0])
        postData.thumbnail = imageResponse.data.url
      } else {
        delete postData.thumbnail
      }
      // Create, update post and fetch data again
      let postResponse: ICreatePostSuccess | MessageResponse
      if (isUpdate && id && post) {
        console.log(postData)
        postResponse = await updatePostMutation.mutateAsync({ id: id, data: postData })
      } else {
        postResponse = await createPostMutation.mutateAsync(postData)
      }

      // Reset form if create post
      if (!isUpdate) {
        setContent('')
        reset()
      }
      // Show toast
      toast({
        title: postResponse.message as string
      })
      // Reload page
      window.location.reload()
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
          {isUpdate ? 'Update' : 'Create'}
        </Button>
      </div>
    </form>
  )
}
