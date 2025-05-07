import React from "react";
import logo from '../assets/EventLy.png'

function Banner() {
  return (
    <div>
      <div className=" py-18 px-6 text-center rounded-2xl m-4 w-[90%] mx-auto">
      <div className="flex flex-col justify-center items-center">
      <img className="w-16" src={logo} alt="" />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">EventLy</h1>
      </div>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
        EventLy is a sports-focused event discovery platform.
Users can find local sports events like football, cricket, tennis, and more.
Each event includes date, time, venue, and category details.
Athletes and fans can explore upcoming matches, tournaments, and practices.
Users can filter events by sports category for easier navigation.
Participants can leave reviews and ratings after attending events.
EventLy helps sports enthusiasts stay connected to their local scene.
The platform is responsive, fast, and easy to use on all devices.
        </p>
      </div>
    </div>
  );
}

export default Banner;
