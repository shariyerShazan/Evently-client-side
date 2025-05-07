import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function CatSport() {
  const [sportsCategory, setSportsCategory] = useState([])
  useEffect(() => {
    const fetchSports = async () => {
      try {
        const res = await fetch('/sports_data.json');
        const data = await res.json();
  
        data.map((sport)=>{
          const categorySports =  sportsCategory.includes(sport.category)
          if(!categorySports){
            setSportsCategory([...sportsCategory, sport.category])
          }
        })
        
      } catch (error) {
        console.error("Failed to fetch sports data:", error);
      }
    };
  
    fetchSports();
  }, [sportsCategory]);
  return (
    <div className="flex flex-wrap gap-4 justify-center w-[90%] mx-auto">
      {
        sportsCategory.map((sports, index) => (
          <Link to={`/category/${sports}`} key={index} className=" btn border-pink-500 bg-pink-100 hover:bg-pink-300 hover:-translate-y-3 transition duration-500 px-8">
            {sports}
          </Link>
        ))
      }
    </div>
  )
}

export default CatSport
