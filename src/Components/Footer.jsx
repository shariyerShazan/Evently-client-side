import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from '../assets/EventLy.png'

function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:text-left">
        <div className="flex items-center sm:items-left justify-center flex-col">
          <h2 className="text-2xl font-bold text-pink-500 flex gap-2 items-center">EventLy <img className="w-8" src={logo} alt="" /></h2>
          <p className="text-gray-400 mt-2">
            Discover and join local sports events near you. Stay active, stay
            connected.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-pink-400">
            Quick Links
          </h3>
          <ul className="space-y-1 text-gray-300">
            <li className=" hover:translate-x-3 duration-500 ">
              <Link to="/">Home</Link>
            </li>
            <li className=" hover:translate-x-3 duration-500 ">
              <Link to="/favourite_events">FavouriteEvents</Link>
            </li>
            <li className=" hover:translate-x-3 duration-500 ">
              <Link to="/booked">Booked</Link>
            </li>
            <li className=" hover:translate-x-3 duration-500 ">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-pink-400">
            Follow Us
          </h3>
          <ul className="flex justify-center items-center sm:items-start gap-1 flex-col space-y-1 text-gray-300">
            <li>
              <a
                target="_blank"
                className="flex gap-2 items-center hover:translate-x-3 duration-500"
                href="https://www.facebook.com/darling.shazan"
              >
                {" "}
                <FaFacebook className="text-pink-500" /> Facebook
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="flex gap-2 items-center hover:translate-x-3 duration-500"
                href="https://www.facebook.com/darling.shazan"
              >
                <FaInstagram className="text-pink-500" /> Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="flex gap-2 items-center hover:translate-x-3 duration-500"
                href="https://www.facebook.com/darling.shazan"
              >
                <FaLinkedin className="text-pink-500" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                 target="_blank"
                className="flex gap-2 items-center hover:translate-x-3 duration-500"
                href="https://www.facebook.com/darling.shazan"
              >
                {" "}
                <FaTwitter className="text-pink-500" /> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4 text-sm">
        &copy; {new Date().getFullYear()} EventLy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
