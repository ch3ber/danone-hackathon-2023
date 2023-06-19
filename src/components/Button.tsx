import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  type?: 'fill' | 'outline'
  size?: 'small' | 'middle' | 'large'
}

export default function Button ({ children, type = 'fill', size = 'middle' }: ButtonProps) {
  const buttonSizes = {
    small: 'w-24 h-8',
    middle: 'w-32 h-10',
    large: 'w-40 h-12'
  }

  const baseStyles = `py-13 px-23 text-button rounded-sm ${buttonSizes[size]}`

  if (type === 'fill') {
    return (
      <button className={`${baseStyles} text-white bg-[#324BAA]`}>
        {children}
      </button>
    )
  }

  if (type === 'outline') {
    return (
      <button className={`${baseStyles} outline outline-1 outline-[#324BAA] text-[#324BAA]`}>
        {children}
      </button>
    )
  }
}
