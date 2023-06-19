import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home () {
  const fetchData = () => {
    return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
      },
      body: JSON.stringify({
        query: `{
          userCollection (limit: 10) {
            items {
              fullName
            }
          }
        }`
      })
    })
  }

  fetchData().then(res => res.json()).then(json => console.log(json))

  return (
    <>
      <main className="text-[#324BAA]">
        <figure className='w-full h-[510px] relative'>
          <Image src={'/hero-home.png'} style={{ objectFit: 'cover' }} fill={true} alt='Hand doing scroll in a phone' />
        </figure>

        <section className='m-20 text-center'>
          <h4 className="text-h4 font-bold">Keep track of your daily calorie limit!</h4>
          <p className='mt-5 mb-10'>Tell us your maximum daily calorie intake and we will recommend the products that best suit your goals!</p>
          <Button type='outline'>
            <Link href={'/'}>Star now</Link>
          </Button>
        </section>
      </main>
    </>
  )
}
