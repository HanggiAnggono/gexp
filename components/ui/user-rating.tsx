import { cn } from '@/lib/utils'
import { StarIcon } from 'lucide-react'

export function UserRating(props: {
  rating: number
  className?: string
  size?: number
}) {
  return (
    <div className={cn('flex items-center', props.className)}>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          fill="currentColor"
          className={`${
            index < props.rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          size={props.size || 20}
        />
      ))}
    </div>
  )
}
