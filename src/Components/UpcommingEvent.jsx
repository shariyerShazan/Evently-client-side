import React, { useEffect, useState } from 'react';
import logo from '../assets/EventLy.png';
import { Link } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";

function UpcommingEvent() {
  const [upcomingData, setUpcomingData] = useState([]);

   useEffect(() => {
      AOS.init({
        duration: 1500,
        once: false,
      });
    }, []);
  
  useEffect(() => {
    fetch('/UpComming.json')
      .then((res) => res.json())
      .then((data) => setUpcomingData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className='bg-gradient-to-t from-pink-50 to-pink-200 py-10'>
      <div className='w-[85%] mx-auto'>
        <h2 className='flex items-center justify-center font-bold text-xl mb-6'>
          UpComming Event On EventLy : <img className='w-8 ml-2' src={logo} alt="logo" />
        </h2>

        {/* Display the upcoming events */}
        <div
         
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {upcomingData.map(event => (
            <div key={event.id}
            data-aos="zoom-in-right"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="2000"
            className='bg-pink-100  shadow-lg border-2 border-pink-500 p-4 rounded-full'>
                <div className='flex itmes-center justify-center'>  <img src={event.thumbnail} alt={event.name} className='w-[80%] h-48 object-cover rounded mb-4' /></div>
            
             <div className='flex flex-col justify-between items-center gap-3'>
             <div className='text-center'>
             <h3 className='text-lg font-semibold'>{event.name}</h3>
              <p className='text-sm text-gray-600'>Date: {event.date}</p>
              <p className='text-sm text-gray-600'>Location: {event.location}</p>
             </div>
             <Link to={`/comming-event-details/${event.id}`} >
             <button className='btn hover:bg-pink-200 bg-white hover:scale-105'>See More</button>
             </Link>
             </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpcommingEvent;
