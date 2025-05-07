import React, { useEffect } from 'react'

function About() {
    useEffect(() => {
      document.title = "About | EventLy";
    }, []);
    
  return (
    <div className="w-[90%] mx-auto bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">About EventLy</h1>
        <p className="text-lg text-gray-600 mb-6">
          EventLy is your go-to platform for discovering and joining local sports events. 
          Whether you're a player, fan, or organizer — EventLy connects you with the sports 
          community around you.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-10 grid gap-8 md:grid-cols-2 text-left shadow-xl p-6 bg-pink-100">
        <div>
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to encourage active lifestyles by making it easy to 
            find, join, and create sports events. We believe in building healthy 
            communities through the power of play.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Local sports event listings</li>
            <li>User reviews and ratings</li>
            <li>Event filtering by category</li>
            <li>Easy registration & discovery</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">Join the Community</h2>
          <p className="text-gray-700">
            Whether you're into football, cricket, basketball, or yoga — EventLy helps you 
            meet like-minded people and join exciting events near you.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">Future Vision</h2>
          <p className="text-gray-700">
            We're expanding to more cities, adding more categories, and building tools 
            for event organizers to manage everything smoothly from our platform.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
