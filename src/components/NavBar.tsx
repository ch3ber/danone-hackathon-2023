import Image from 'next/image'
import Link from 'next/link'

export default function NavBar () {
  return (
    <nav className="bg-brand-50 text-brand-950 p-10">
      <div className='mx-auto max-w-screen-2xl flex justify-between items-center '>
        <Image src={'/nav-logo.png'} width={131} height={48.07} alt={'Danone logo'} />
        <ul className='flex gap-4 text-brand-950 font-bold'>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/'}>Products</Link></li>
          <li><Link href={'/'}>Diary</Link></li>
          <li><Link href={'/'}>Contact</Link></li>
        </ul>
        <div className='flex gap-10 items-center justify-between'>
          <button><Image src={'/icon-pack/dropdown-menu.svg'} width={27} height={27} alt={'Dropdown icon color blue'} /></button>
          <button><Image src={'/icon-pack/Type=fi-rr-search.svg'} width={27} height={27} alt={'Search icon color blue'} /></button>
        </div>
      </div>
    </nav>
  )
}
