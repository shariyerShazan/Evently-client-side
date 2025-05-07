import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import CatSport from '../Components/CatSport'
import SlideBanner from '../Components/SlideBanner'
import UpcommingEvent from '../Components/UpcommingEvent';

function Home() {
  useEffect(() => {
        document.title = "Home | EventLy";
      }, []);
  return (
    <div>
      <Banner />
      <CatSport />
      <SlideBanner/>
      <UpcommingEvent />
    </div>
  )
}

export default Home
