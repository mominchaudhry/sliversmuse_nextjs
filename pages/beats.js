import axios from "axios";
import { useEffect, useState } from "react";
import Beats from "../components/Beats";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import MyNavbar from "../components/MyNavbar";

export default function BeatsPage ({beats = []}) {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <div className="app">
      <div className="d-flex flex-column justify-content-between main-section">
        <MyNavbar setLoading={setIsLoading} beats={true}/>
        <Beats beats={beats}/>
        <div className="d-flex justify-content-center w-100">
        <img loading="lazy" className="godmode" src="/Assets/godmode.png" alt="godmode" />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const data = await axios.get('https://sliversmuse.herokuapp.com/api/beats?populate=mp3')

  let beatsData = []
  for (let b of data?.data?.data){
      beatsData = [{
        id: b.id,
        name: b.attributes.title,
        description: b.attributes.description,
        mp3: b.attributes.mp3.data.attributes.url,
        price: b.attributes.price
      }, ...beatsData]
  }
  return {
    props: {
      beats:beatsData,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 1200 seconds
    revalidate: 1200, // In seconds
  }
}