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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Danone hackathon</h1>
    </main>
  )
}
