import Header from "../components/Header";
import MyNavbar from "../components/MyNavbar";
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bilbo+Swash+Caps&family=Kolker+Brush&family=Luckiest+Guy&family=Vujahday+Script&display=swap" rel="stylesheet"/>
      </Head>
      <div className="app">
        <div className="d-flex flex-column justify-content-between main-section">
          <MyNavbar beats={false}/>
          <Header />
          <div className="d-flex justify-content-center w-100">
            <img loading="lazy" className="godmode" src="/Assets/godmode.png" alt="godmode" />
          </div>
        </div>
      </div>
    </div>
  )
}


