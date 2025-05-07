import React, { useEffect, useContext } from "react";
import { useLoaderData } from "react-router";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import logo from "../assets/EventLy.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImCross } from "react-icons/im";
import { MyContext } from "../ContextAndAuth/Context";

function Booked() {
  //
  const {booked , setBooked, user , showReview , setShowReview ,reviewText , setReviewText , rating , setRating  } = useContext(MyContext);
 

  const handleReviewSubmit = (eventId) => {
    const review = {
      user: user?.email,
      eventId,
      rating,
      reviewText,
    };
    setShowReview(null);
    setReviewText("");
    setRating(5);
  };

  useEffect(() => {
    document.title = "Booked | EventLy";
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  const data = useLoaderData();


  // console.log("Review Submitted:", review);
  // const [myBooked, setMyBooked] = useState([]);
  // console.log(bookedId);
  // useEffect(() => {
    // const booked = localStorage.getItem("booked");
    // const bookedId = booked ? JSON.parse(booked) : [];
    // const filtered = data.filter((event) => booked.includes(event.id));
    // setMyBooked(filtered);
        // const updatedList = myBooked.filter((booked) => booked.id !== ID);
    // localStorage.setItem("booked", JSON.stringify(updatedList));
    // setMyBooked(updatedList);
  // }, [ ]);

    const myBooked = data.filter((event) =>
      booked.includes(event.id)
    );


  const removeBooked = (ID) => {

    const updatedList = booked.filter(id => id !== ID);
    setBooked(updatedList);

  };

  return (
    <div className="w-[90%] mx-auto">
      <div className="text-2xl text-center font-bold mb-[100vh] relative mt-4">
        Booked List
        <span className="text-pink-500 flex justify-center items-center ">
          EventLy <img className="w-6" src={logo} alt="" />
        </span>{" "}
        <div className="flex group flex-col items-center absolute right-11/24 mt-[50vh] ">
          <span>Scroll Down</span>
          <HiOutlineArrowNarrowRight
            className="rotate-90 group-hover:translate-y-10 duration-500"
            size={100}
          />
        </div>
      </div>
      {myBooked.length > 0 ? (
        myBooked.map((booked , i) => (
          <div key={i} className="bg-pink-100 flex  justify-between p-4 items-center my-2 rounded-xl">
            <div className="flex items-center justify-center gap-3">
              <h1 className="font-bold text-xl">{booked.name} </h1>
              <button
               onClick={() => removeBooked(booked.id)}
                className="btn bg-pink-100 hover:bg-pink-500 hover:text-white`">
                <ImCross
                  className=" hover:scale-125 "
                />
              </button>
            </div>

            {/* <MdKeyboardDoubleArrowRight
              size={100}
              className="text-pink-500 hidden lg:block translate-x-[200px]"
              data-aos="fade-right"
            /> */}

            <p className="flex flex-col sm:flex-row gap-2 w-[180px] sm:w-max ml-12 ">
              <span>Ticket Pirce: </span>
              <span className="text-pink-500 font-bold mr-10">
                {booked.entry_fee}
              </span>
              <span>Show Date:</span>
              <span className="text-pink-500 font-bold">{booked.date}</span>
            </p>
            {/*  */}
           
            {user ? (
              <div className="w-full sm:w-auto hidden sm:block">
                <button
                  onClick={() => setShowReview(booked.id)}
                  className="mt-4 sm:mt-0 bg-pink-500 hover:bg-pink-600 transition duration-300 text-white px-4 py-2 rounded-md shadow"
                >
                  Give Review
                </button>

                {showReview === booked.id && (
                  <div className="mt-4 bg-white rounded-lg shadow-md p-4 w-full sm:w-[500px]">
                    <textarea
                      className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                      rows="3"
                      placeholder="Write your review here..."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                    />
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3">
                      <label className="text-gray-700 font-medium">
                        Rating:
                      </label>
                      <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="border border-pink-300 p-2 rounded-md focus:outline-none"
                      >
                        {[1, 2, 3, 4, 5].map((star) => (
                          <option key={star} value={star}>
                            {star} ★
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => handleReviewSubmit(booked.id)}
                        className="bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 rounded-md"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-red-500 font-semibold mt-2">
                Please login to give a review.
              </p>
            )}
          </div>
        ))
      ) : (
        <p className="text-pink-400 font-bold text-center text-3xl mt-12 mb-6">
          No booked events found.
        </p>
      )}
    </div>
  );
}

export default Booked;
