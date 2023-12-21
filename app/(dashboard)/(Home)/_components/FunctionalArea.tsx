'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import CreatePostSide from './CreatePostSide'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useContext } from 'react'
import { FilterContext, FilterContextType } from '@/components/FilterContextProvider'

// Define text and value of select
const options: { text: string; value: 'asc' | 'desc' }[] = [
  { text: 'Newest', value: 'desc' },
  { text: 'Oldest', value: 'asc' }
]

export default function FunctionalArea() {
  const { postFilters } = useContext(FilterContext) as FilterContextType

  const handleChangeFilters = (value: 'asc' | 'desc') => {
    return postFilters.setFilters({ ...postFilters.filters, createdAt: value })
  }

  return (
    <div>
      {/* Create new blog */}
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant='outline'>Create new blog</Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px] min-w-[800px] p-9 h-[90vh]'>
            <ScrollArea className='w-full h-full'>
              <CreatePostSide />
              <ScrollBar orientation='horizontal' />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className='mt-4'>
        <Select onValueChange={handleChangeFilters}>
          <SelectTrigger>
            <SelectValue placeholder='Filter' />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.text}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
