import { FaRegUserCircle } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string | null
}

export default function Avatar({ src, className, ...rest }: AvatarProps) {
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
        <FaRegUserCircle size={36} color='gray' />
      )}
    </div>
  )
}
