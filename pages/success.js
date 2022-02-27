import SuccessPage from "../components/SuccessPage";
import MyNavbar from "../components/MyNavbar";
import { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage/LoadingPage";

export default function Success() {

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
        <MyNavbar setLoading={setIsLoading} beats={false}/>
        <SuccessPage />
        <div className="d-flex justify-content-center w-100">
          <img loading="lazy" className="godmode" src="/Assets/godmode.png" alt="godmode" />
        </div>
      </div>
    </div>
  )
}


