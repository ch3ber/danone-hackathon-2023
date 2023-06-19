import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  type?: 'fill' | 'outline'
  size?: 'small' | 'middle' | 'large'
}

export default function Button ({ children, type = 'fill', size = 'small' }: ButtonProps) {
  const buttonSizes = {
    small: 'py-2 px-4',
    middle: 'py-4 px-8',
    large: 'py-6 px-12'
  }

  const baseStyles = `w-fit mx-auto text-button rounded-sm ${buttonSizes[size]}`

  if (type === 'fill') {
    return (
      <div className={`${baseStyles} text-white bg-[#324BAA]`}>
        {children}
      </div>
    )
  }

  if (type === 'outline') {
    return (
      <div className={`${baseStyles} outline outline-1 outline-[#324BAA] text-[#324BAA]`}>
        {children}
      </div>
    )
  }
}
