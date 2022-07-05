import Header from "../components/Header";
import MyNavbar from "../components/MyNavbar";
import { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Home() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingPage />
  }
  return (
    <div className="app">
      <Head>
        <title>
          sliversmuse - home
        </title>
      </Head>
      <div className="d-flex flex-column justify-content-between main-section">
        <MyNavbar setLoading={setIsLoading} beats={false}/>
        <Header />
        <Footer />
      </div>
    </div>
  )
}


