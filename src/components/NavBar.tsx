'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar () {
  const [active, setActive] = useState('hidden')

  return (
    <nav className="bg-brand-50 text-brand-950 p-5 md:p-10 relative">
      <div className="max-w-screen-xl flex flex-wrap items-start justify-between mx-auto">
        <Link href={'/'}>
          <Image src={'/nav-logo.png'} width={135} height={50} alt={'Danone logo'} />
        </Link>
        <button onClick={() => setActive(active === 'hidden' ? 'block' : 'hidden')} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-brand-500 rounded-lg md:hidden hover:bg-brand-100 focus:outline-none focus:ring-2 focus:ring-brand-200" aria-controls="navbar-default" aria-expanded="false">
          <Image src={'/icon-pack/dropdown-menu.svg'} width={27} height={27} alt={'Dropdown icon color blue'} />
        </button>
        <div className={`${active} z-10 absolute md:static top-24 right-0 left-0 mx-auto w-4/5 md:block md:w-auto`} id="navbar-default">
          <ul className='gap-4 text-brand-950 font-bold flex flex-col p-4 md:p-0 mt-4 border-2 border-brand-300 rounded-lg bg-brand-50 md:flex-row md:space-x-8 md:mt-0 md:border-0'>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/products'}>Products</Link></li>
            <li><Link href={'/'}>Diary</Link></li>
            <li><Link href={'/'}>Contact</Link></li>

          </ul>
        </div>
        <div className='hidden lg:flex items-center justify-between gap-5'>
          <Image src={'/icon-pack/dropdown-menu.svg'} width={27} height={27} alt={'Dropdown icon color blue'} />
          <Image src={'/icon-pack/Type=fi-rr-search.svg'} width={27} height={27} alt={'Search icon color blue'} />
        </div>
      </div>
    </nav>
  )
}
