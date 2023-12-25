'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { IFilterContext } from '@/components/FilterContextProvider'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface FilterSelectionProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  filterContexts: IFilterContext<T>
}

// Define text and value of select
const options: { text: string; value: 'asc' | 'desc' }[] = [
  { text: 'Newest', value: 'desc' },
  { text: 'Oldest', value: 'asc' }
]

export default function FilterSelection<T>({ filterContexts, className }: FilterSelectionProps<T>) {
  const handleChangeFilters = (value: 'asc' | 'desc') => {
    return filterContexts.setFilters({ ...filterContexts.filters, createdAt: value })
  }

  return (
    <div className={twMerge('mt-4', className)}>
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
  )
}
