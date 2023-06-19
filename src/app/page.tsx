import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <main className="text-[#324BAA]">
        <div className='w-full'>
          <figure className='mx-auto w-4/5 h-[400px] relative rounded-b-lg overflow-hidden'>
            <Image src={'/hero-home.png'} style={{ objectFit: 'cover' }} fill={true} alt='Hand doing scroll in a phone' />
          </figure>
        </div>

        <section className='m-20 text-center'>
          <h4 className="text-h4 font-bold">Keep track of your daily calorie limit!</h4>
          <p className='mt-5 mb-10'>Tell us your maximum daily calorie intake and we will recommend the products that best suit your goals!</p>
          <Button type='outline' size='middle'>
            <Link href={'/'}>Star now</Link>
          </Button>
        </section>
      </main>
    </>
  )
}
