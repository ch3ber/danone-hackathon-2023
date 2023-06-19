import Image from 'next/image'

export default function LoginBar () {
  return (
    <section className='bg-general-loginBar text-white h-12 p-8 w-full flex justify-end items-center'>
      <button className='flex items-center justify-center gap-3'>
        <Image src={'/icon-pack/Type=user-white.svg'} width={20} height={20} alt='User outline icon color blue' />Login/Sign Up
      </button>
    </section>
  )
}
