import Image from 'next/image'

interface Props {
  variants: Array<{ id: number; name: string; imageUrl: string }>
}

export function ProductVariantGrid({ variants }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {variants.map((variant) => (
        <div key={variant.id}>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="variant"
              id={`${variant.id}`}
              className="hidden"
            />
            <div className="flex flex-col justify-center border-2 rounded-md [input:checked+&]:bg-primary [input:checked+&]:text-primary-foreground">
              <div className="relative w-full h-32 overflow-hidden">
                <Image
                  src={variant.imageUrl}
                  alt={variant.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="p-2">{variant.name}</div>
            </div>
          </label>
        </div>
      ))}
    </div>
  )
}
