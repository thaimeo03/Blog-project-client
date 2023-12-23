'use client'
import { AuthContext, AuthContextType } from '@/app/(auth)/_components/AuthContextProvider'
import Avatar from '@/components/Avatar'
import BreadCrumb from '@/components/BreadCrumb'
import Input from '@/components/Input'
import { Button } from '@/components/ui/button'
import { PATH_ROUTER } from '@/constants/route.constant'
import { IUpdateProfile } from '@/interfaces/users.interface'
import { useContext, useRef } from 'react'
import { useForm } from 'react-hook-form'

export default function Profile() {
  const { auth } = useContext(AuthContext) as AuthContextType

  // Initialize react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IUpdateProfile>({
    defaultValues: {
      name: auth.profile.name,
      email: auth.profile.email,
      address: auth.profile.address,
      birthday: auth.profile.birthday
    }
    // resolver: yupResolver(ICreatePostSchema)
  })

  // Active event for avatar
  const avatarRef = useRef<HTMLInputElement>(null)
  const handleChangeAvatar = () => {
    if (avatarRef.current) {
      avatarRef.current.click()
    }
  }

  return (
    <main className='container mx-auto px-4'>
      <BreadCrumb nextRoute={{ name: 'Profile', path: PATH_ROUTER.PROFILE }} />

      <div
        className='rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-xl mx-auto my-10'
        data-v0-t='card'
      >
        <div className='flex flex-col space-y-1.5 p-6'>
          <h3 className='text-2xl font-semibold leading-none tracking-tight'>User Profile</h3>
          <p className='text-sm text-muted-foreground'>Update your profile information.</p>
        </div>
        <div className='p-6'>
          <div className='flex items-center gap-3 mb-4'>
            <span className='relative flex shrink-0 overflow-hidden rounded-full h-24 w-24'>
              <Avatar
                src={auth.profile.avatar}
                className='flex h-full w-full items-center justify-center rounded-full bg-muted'
              />
            </span>
            <div>
              <Button
                className='inline-flex bg-emerald-500 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-emerald-500/90 h-10 px-4 py-2'
                type='button'
                onClick={handleChangeAvatar}
              >
                <label htmlFor='avatar' className='cursor-pointer flex items-center'>
                  Change Avatar
                  <input type='file' ref={avatarRef} name='avatar' className='opacity-0 w-0 h-0' />
                </label>
              </Button>
            </div>
          </div>
          {/* Form input */}
          <form className='space-y-4'>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='name'
              >
                Name
              </label>
              <Input id='name' placeholder='Enter your name' register={register('name')} />
            </div>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='email'
              >
                Email
              </label>
              <Input
                type='email'
                classCustom='disabled:bg-gray-200'
                id='email'
                placeholder='Enter your email'
                register={register('email')}
                disabled
              />
            </div>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='birthday'
              >
                Birthday
              </label>
              <Input type='date' id='birthday' placeholder='Enter your birthday' register={register('birthday')} />
            </div>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='address'
              >
                Address
              </label>
              <Input id='address' placeholder='Enter your address' register={register('address')} />
            </div>

            <div className='flex items-center p-6'>
              <Button className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-emerald-500 text-primary-foreground hover:bg-emerald-500/90 h-10 px-4 py-2 ml-auto'>
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
