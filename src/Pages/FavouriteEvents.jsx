import React, { useContext, useEffect} from "react";
import { useLoaderData } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaBookmark } from "react-icons/fa";
import logo from '../assets/EventLy.png'
import { IoIosRemoveCircle } from "react-icons/io";
import { MyContext } from "../ContextAndAuth/Context";

function FavouriteEvents() {

  const { booked, setBooked  , favListId, setFavListId} = useContext(MyContext);

  useEffect(() => {
    document.title = "Favourite Events | EventLy";
  }, []);
  
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);


  const data = useLoaderData();
  
  // useEffect(() => {
  //   const storedIds = localStorage.getItem("favListId");
  //   if (storedIds) {
  //     setFavListId(JSON.parse(storedIds));
  //   }
  //   setAllEvents(data);
  // }, []);
    // useEffect(() => {
  //   const bookedFromStorage = localStorage.getItem("booked");
  //   const bookedId = bookedFromStorage ? JSON.parse(bookedFromStorage) : [];

  //   if (bookedId.length > 0) {
  //     setBooked(bookedId);
  //   }
  // }, []);
  // localStorage.setItem("favListId", JSON.stringify(updatedList));
    // const [favListId, setFavListId] = useState([]);
  // const [allEvents, setAllEvents] = useState([]);
 // localStorage.setItem("booked", JSON.stringify(booked)); 

  const favouriteEvents = data.filter((event) =>
    favListId.includes(event.id)
  );
  

  const handleBooked = (id) => {
    if (!booked.includes(id)) {
      const updated = [...booked, id];
      setBooked(updated);
      
    }
  };

  const handleFavRemove = (ID) => {
    const updatedList = favListId.filter(id => id !== ID);
    setFavListId(updatedList);
    
  };

  return (
    <div className="w-[90%] mx-auto">
      <div className="text-2xl text-center font-bold mb-[100vh] relative mt-4">
        Favourite Listed<span className="text-pink-500 flex justify-center items-center ">EventLy <img className="w-6" src={logo} alt="" /></span>{" "}
        <div className="flex group flex-col items-center absolute right-11/24 mt-[50vh] ">
          <span>Scroll Down</span>
          <HiOutlineArrowNarrowRight
            className="rotate-90 group-hover:translate-y-10 duration-500"
            size={100}
          />
        </div>
      </div>
      <div className="p-5 flex flex-wrap justify-center gap-8 mb-12">
        {favouriteEvents.length > 0 ? (
          favouriteEvents.map((event, i) => (
            <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
              key={i}
              className="group relative border-pink-500 border-1 w-[250px] shadow p-4 rounded bg-pink-100"
            >
              <button
                onClick={()=> handleFavRemove(event.id)}
               className="-right-2.5 absolute -top-2.5 rounded-full text-white bg-pink-500 group-hover:translate-y-[308px] group-hover:-translate-x-[120px] duration-500 cursor-pointer hover:scale-115">
                
              <IoIosRemoveCircle size={25} />
              </button>
              
              <img
                src={event.thumbnail}
                alt={event.name}
                className="w-full rounded-md h-48 object-cover my-2 group-hover:-translate-y-12 duration-500"
              />
              <h1 className="text-xl font-semibold text-center group-hover:-translate-y-12 duration-500">
                {event.name.slice(0 , 28)}
              </h1>
              <div className="group-hover:-translate-y-12 duration-500 flex justify-center gap-2 items-center text-pink-500 font-bold mt-2">
                <span>{event.entry_fee}</span>
                <button
                disabled={booked.includes(event.id)} 
                  onClick={()=>handleBooked(event.id)}
                 className="group-hover:bg-pink-500 btn bg-pink-100  rounded-xl hover:scale-105">
                   {booked.includes(event.id) ? "Already Booked" : "Reserve Seat"} <FaBookmark />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-pink-400 font-bold text-center text-3xl mt-12">
            No Favourite Events Found.
          </p>
        )}
      </div>
    </div>
  );
}

export default FavouriteEvents;
