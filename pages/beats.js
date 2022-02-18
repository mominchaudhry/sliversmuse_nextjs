import Beats from "../components/Beats";
import MyNavbar from "../components/MyNavbar";
import Head from 'next/head'

export default function BeatsPage ({beats = []}) {
  return (
    <div>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Bilbo+Swash+Caps&family=Kolker+Brush&family=Luckiest+Guy&family=Vujahday+Script&display=swap" rel="stylesheet"/>
        </Head>
        <div className="app">
        <div className="d-flex flex-column justify-content-between main-section">
            <MyNavbar beats={true}/>
            <Beats beats={beats}/>
            <div className="d-flex justify-content-center w-100">
            <img loading="lazy" className="godmode" src="/Assets/godmode.png" alt="godmode" />
            </div>
        </div>
        </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://sliversmuse.herokuapp.com/api/beats?populate=mp3')
  const json = await res.json()

  let beatsData = []
  for (let b of json.data){
      beatsData = [{
        id: b.id,
        name: b.attributes.title,
        description: b.attributes.description,
        mp3: b.attributes.mp3.data.attributes.url
      }, ...beatsData]
  }
  return {
    props: {
      beats:beatsData,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 1200 seconds
    revalidate: 10, // In seconds
  }
}