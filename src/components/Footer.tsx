import Image from 'next/image'
import Link from 'next/link'

export default function Footer () {
  return (
    <footer className="bg-brand-950 text-white p-14">
      <div className="max-w-screen-2xl flex flex-col md:flex-row justify-center items-start gap-20 md:gap-52">
        <section>
          <h6 className="text-h6 font-bold">Another pages</h6>
          <div className='flex underline justify-between items-start gap-20 pl-5'>
            <ul className="mt-5 space-y-2 list-disc">
              <li className='hover:opacity-50 transition-opacity'>News</li>
              <li className='hover:opacity-50 transition-opacity'>Products</li>
            </ul>
            <ul className="mt-5 underline space-y-2 list-disc">
              <li className='hover:opacity-50 transition-opacity'>Contact</li>
              <li className='hover:opacity-50 transition-opacity'>Help</li>
            </ul>
          </div>
        </section>
        <section>
          <h6 className="text-h6 font-bold">Social network</h6>
          <ul className='mt-5 flex justify-between items-center gap-10'>
            <li className='bg-white w-14 h-14 rounded-full relative hover:opacity-50 transition-opacity'>
              <Link target='_blank' href={'https://www.instagram.com/danonemx'}>
                <Image src={'/social-network-icons/Type=insta.svg'} fill={true} alt='Instagram icon with white baground' />
              </Link>
            </li>
            <li className='bg-white w-14 h-14 rounded-full relative hover:opacity-50 transition-opacity'>
              <Link target='_blank' href={'https://www.facebook.com/Danone'}>
                <Image src={'/social-network-icons/Type=facebook.svg'} fill={true} alt='Facebook icon with white baground' />
              </Link>
            </li>
            <li className='bg-white w-14 h-14 rounded-full relative hover:opacity-50 transition-opacity'>
              <Link target='_blank' href={'https://twitter.com/Danone'}>
                <Image src={'/social-network-icons/Type=twitter.svg'} fill={true} alt='Twitter icon with white baground' />
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  )
}
