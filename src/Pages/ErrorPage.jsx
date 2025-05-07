import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { FaArrowRight } from "react-icons/fa";
import logo from '../assets/EventLy.png'

function ErrorPage() {

  useEffect(() => {
        document.title = "Error | EventLy";
      }, []);

  return (
    <div className="w-[90%] mx-auto flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-100 to-white px-4 text-center">
      <h1 className="text-6xl font-bold text-pink-600 mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-800 mb-2">Oops! Page Not Found</p>
      <p className="text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>
      
      <Link to="/" className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full transition-all duration-300 flex gap-2 items-center">
        Back to Home <FaArrowRight /> <span className='font-bold flex items-center gap-2'>EventLy <img className='w-6' src={logo} alt="" /></span>
      </Link>

      <div className="mt-10">
        <img 
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" 
          alt="Not Found Illustration"
          className="w-80 mx-auto"
        />
      </div>
    </div>
  )
}

export default ErrorPage
