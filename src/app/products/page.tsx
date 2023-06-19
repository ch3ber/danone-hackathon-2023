import Button from '@/components/Button'
import Image from 'next/image'
import { Product } from '@types'
import { useProducts } from '@/hooks/useProducts'

export default async function Products () {
  const { data, loading, error } = await useProducts()
  let products: Product[] | null | undefined

  if (error) return <p>Error :{error.message}</p>

  if (loading) {
    products = null
  }

  if (data) {
    products = data.productCollection.items
  }

  return (
    <>
      <main className='max-w-7xl mx-auto py-20 px-5 sm:px-10'>
        <h1 className='text-h3 md:text-h1 text-brand-950'>Products Eco Danone</h1>
        <div className='w-fit flex items-center justify-start gap-10 mt-10'>
          <Button type='outline'>Show all</Button>
          <Button>According to my caloric limit</Button>
        </div>
        <section className='px-10 lg:px-10 grid grid-cols-1 justify-stretch items-start md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 mt-10'>
          {products && products.map((product) => (
            <article key={product.title}>
              <figure className='bg-white relative w-full aspect-square rounded overflow-hidden max-w-[200px] mx-auto'>
                <Image src={product.preview.url} fill style={{ objectFit: 'contain' }} alt={product.title} />
              </figure>
              <div className='mt-5 outline outline-1 outline-brand-950 rounded p-5 w-3/4 mx-auto lg:w-full flex flex-col justify-start items-center text-center gap-3'>
                <h6 className='text-h6 font-bold'>{product.title}</h6>
                <div className='w-[110px] h-5 border border-brand-300 flex justify-start items-center rounded'>
                  <div className={`ml-1 mx-auto w-[${product.kcal}px] h-3 bg-brand-200 rounded`}></div>
                </div>
                <p>Kcal {product.kcal}/100</p>
                <button>
                  <Image src={'/icon-pack/Type=fi-rr-add.svg'} width={35} height={35} alt='Plus icon color blue' />
                </button>
              </div>
            </article>
          ))
          }
        </section>
      </main>
    </>
  )
}
