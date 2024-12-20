'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useRef, useState } from 'react'

interface Props {
  images: string[]
}

export function ProductImageCollection({ images = [] }: Props) {
  const [activeImage, setActiveImage] = useState(0)
  const imagesRef = useRef<HTMLDivElement[]>([])
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -120,
      behavior: 'smooth',
    })
  }

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 120,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <div className="relative rounded-md overflow-hidden w-auto h-[30rem] bg-primary">
        <Image
          src={images[activeImage]}
          alt="Product"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div
        className="w-auto overflow-x-auto p-2"
        ref={sliderRef}
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="slider-parent flex gap-4 pt-4">
          {images.map((image, i) => {
            return (
              <div
                key={`image_${i}`}
                className={cn(
                  activeImage === i ? 'outline outline-4 outline-primary' : '',
                  'flex-shrink-0 relative rounded-md overflow-hidden h-[7rem] w-[7rem] bg-primary'
                )}
                id={`pdp-image-${i}`}
                ref={(ref) => {
                  imagesRef.current[i] = ref!
                }}
              >
                <Button onClick={() => setActiveImage(i)}>
                  <Image
                    src={image}
                    alt="Product"
                    layout="fill"
                    objectFit="cover"
                  />
                </Button>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex gap-2 p-4 md:pr-0 justify-end">
        <Button onClick={scrollLeft}>Prev</Button>
        <Button onClick={scrollRight}>Next</Button>
      </div>
    </div>
  )
}
