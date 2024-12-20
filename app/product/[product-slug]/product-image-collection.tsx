'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRef, useState } from 'react'

interface Props {
  images: string[]
}

const VISIBLE_IMAGE_COUNT = 4

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
      <div className="relative rounded-md overflow-hidden h-[30rem] w-[30rem] bg-primary">
        <Image
          src={images[activeImage]}
          alt="Product"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div
        className="w-[30rem] overflow-x-auto"
        ref={sliderRef}
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="slider-parent flex gap-4 pt-4">
          {images.map((image, i) => (
            <div
              key={`image_${i}`}
              className="flex-shrink-0 relative rounded-md overflow-hidden h-[7rem] w-[7rem] bg-primary"
              id={`pdp-image-${i}`}
              ref={(ref) => {
                imagesRef.current[i] = ref!
              }}
            >
              <Button
                onClick={() => setActiveImage(i)}
                className={activeImage === i ? 'border-4 border-primary' : ''}
              >
                <Image
                  src={image}
                  alt="Product"
                  layout="fill"
                  objectFit="cover"
                />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 pt-4 justify-end">
        <Button onClick={scrollLeft}>Prev</Button>
        <Button onClick={scrollRight}>Next</Button>
      </div>
    </div>
  )
}
