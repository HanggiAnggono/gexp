'use client'

import { useState } from 'react'
import { Button } from './button'
import { cn } from '@/lib/utils'
import { MinusIcon, PlusIcon } from 'lucide-react'

interface Props {
  className?: string
}

export function QuantityInput({ className }: Props) {
  const [value, setValue] = useState(1)
  const handleDecrement = () => {
    if (value >= 1) {
      setValue((prev) => prev - 1)
    }
  }
  const handleIncrement = () => setValue((prev) => prev + 1)

  return (
    <div
      className={cn(
        'flex items-center justify-between gap-4 bg-accent w-40 rounded-md px-2 py-4',
        className
      )}
    >
      <button onClick={handleDecrement} disabled={value === 0} className="px-2">
        <MinusIcon className={value === 0 ? 'text-muted-foreground' : ''} />
      </button>
      <div>{value}</div>
      <button onClick={handleIncrement} className="px-2">
        <PlusIcon />
      </button>
    </div>
  )
}
