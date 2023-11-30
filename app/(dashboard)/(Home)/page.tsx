'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Editor from './_components/Editor'
import BlogList from './_components/BlogList'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export default function Home() {
  return (
    <main className='mt-3'>
      <div className='grid grid-cols-6'>
        <div className='col-span-1'>
          <div className='fixed'>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='outline'>Create new blog</Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px] min-w-[800px] p-9 h-[90vh]'>
                <ScrollArea className='w-full h-full'>
                  <Editor />
                  <ScrollBar orientation='horizontal' />
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className='col-span-5'>
          <BlogList />
        </div>
      </div>
    </main>
  )
}
