import React from 'react'

function SlideBanner() {
  return (
    <div className='py-18 bg-gradient-to-t from-pink-200 to-white'>
         <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.freepik.com/free-vector/cricket-champions-league-social-media-banner-design-with-participant-countries-batsman-helmets-golden-trophy_1302-5489.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://t4.ftcdn.net/jpg/05/30/63/47/360_F_530634745_JTqtCiOWatBxCvRBVODE8k1In6hNWd6q.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://static.vecteezy.com/system/resources/previews/035/277/450/non_2x/badminton-sport-banner-background-in-red-and-white-with-halftone-and-diagonal-stripes-vector.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://thumbs.dreamstime.com/z/swimming-sport-illustration-vector-swimming-background-banner-poster-flyer-swimming-sport-illustration-vector-swimming-272326224.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>   
  )
}

export default SlideBanner
