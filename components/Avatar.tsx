import { FaRegUserCircle } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string | null
  iconSize?: number
}

export default function Avatar({ src, className, iconSize, ...rest }: AvatarProps) {
  return (
    <div>
      {src ? (
        <img
          className={twMerge('w-9 h-9 rounded-full object-cover', className)}
          src={src}
          alt='user photo'
          {...rest}
          loading='lazy'
        />
      ) : (
        <FaRegUserCircle size={iconSize || 36} color='gray' />
      )}
    </div>
  )
}
