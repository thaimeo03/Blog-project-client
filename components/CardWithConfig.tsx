import { BsThreeDots } from 'react-icons/bs'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import PopoverPostConfig from '@/app/(dashboard)/my-posts/_components/PopoverPostConfig'

export default function CardWithConfig({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative'>
      <div className='absolute top-0 right-0 -translate-x-[4px] translate-y-[calc(100%-8px)] z-10'>
        <Popover>
          <PopoverTrigger>
            <div
              className='bg-gray-800 bg-opacity-50 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-700 transition-all'
              title='More'
            >
              <div className='text-white'>
                <BsThreeDots />
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className='p-0 w-24 bg-gray-100'>
            <PopoverPostConfig />
          </PopoverContent>
        </Popover>
      </div>
      {children}
    </div>
  )
}
