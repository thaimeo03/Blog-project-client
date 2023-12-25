'use client'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useState } from 'react'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import Editor from '../../_components/Editor'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export default function PopoverPostConfig() {
  const [content, setContent] = useState('')

  return (
    <ul>
      <li className='px-2 py-1 cursor-pointer hover:bg-gray-200 rounded'>
        <Dialog>
          <DialogTrigger className='flex items-center space-x-2 '>
            <FaRegEdit size={18} color='blue' />
            <span className='text-sm'>Edit</span>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px] min-w-[800px] p-9 h-[90vh]'>
            <ScrollArea className='w-full h-full'>
              {/* Change a lot of things */}
              <Editor content={content} setContent={setContent} />
              <ScrollBar orientation='horizontal' />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </li>
      <li className='px-2 py-1 cursor-pointer hover:bg-gray-200 rounded'>
        <div className='flex items-center space-x-2 '>
          <FaRegTrashAlt size={17} color='red' />
          <span className='text-sm'>Delete</span>
        </div>
      </li>
    </ul>
  )
}
