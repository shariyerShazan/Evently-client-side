import React, {  useContext, useEffect} from "react";
import { useLoaderData, useParams } from "react-router";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MyContext } from "../ContextAndAuth/Context";
// import { createContext } from 'react';


function CategorySports() {
 
  useEffect(() => {
        document.title = "Category | EventLy";
      }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500, 
      once: false    
    });
  }, []);

  const allData = useLoaderData();
  const { id } = useParams();

  const matchedCategory = allData.filter(
    (item) => item.category.toLowerCase() === id.toLowerCase()
  );
   
  const {setFavListId , favListId } = useContext(MyContext)

  const handleFav = (id)=>{
       if(!favListId.includes(id)){
         setFavListId([...favListId , id])
       }
        //  console.log(favListId)
  }
  return (
    <div className="p-4 w-[90%] mx-auto">
      <div className="text-2xl text-center font-bold mb-[100vh] relative">
        Category:<span className="text-pink-500">{id}</span>{" "}
        <div className="flex group flex-col items-center absolute right-11/24 mt-[50vh] "> 
        <span>Scroll Down</span>
          <HiOutlineArrowNarrowRight  className="rotate-90 group-hover:translate-y-10 duration-500" size={100}/>
        </div>
      </div>
      {
        
      }

      {matchedCategory.length > 0 ? (
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {matchedCategory.map((event, index) => (
            <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" key={index} className="group bg-pink-50 shadow-lg p-6 rounded-lg border-pink-500 border-1 ">
              <div className="flex items-center justify-center pb-2">
                <img 
                    src={event.thumbnail}
                    className="w-[330px] h-[300px] object-cover group-hover:-translate-y-12 duration-900 rounded-md"
                     alt="" />
              </div>
              <h3 className="text-xl font-semibold text-center pb-2 group-hover:-translate-y-12 duration-900">
                {event.name}
              </h3>
              <p className="text-gray-600 pb-2 group-hover:-translate-y-12 duration-900">{event.description}</p>
              <div className="flex justify-between group-hover:-translate-y-12 duration-900">
                <p className="font-bold">{event.date}</p>
                <p className="font-bold">{event.entry_fee}</p>
              </div>
              <div className="flex justify-center items-center group-hover:-translate-y-12 duration-900">
              <button 
              onClick={()=> handleFav(event.id)}
              disabled={favListId.includes(event.id)} 
              className="btn w-full mt-2 group-hover:bg-pink-400 bg-pink-200 ">{favListId.includes(event.id) ? "Already Favourite" : "Make It Favourite"}</button>
              </div>
              
            </div>
          ))}
        </div>
      ) : (
        <p className="text-pink-500 font-bold text-center text-3xl mt-12">No items found in this category.</p>
      )}
    </div>
  );
}

export default CategorySports;
