import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/EventLy.png";
import { MyContext } from "../ContextAndAuth/Context";
import { toast, ToastContainer } from "react-toastify";

function Navbar() {
  const { user, logOut } = useContext(MyContext);
  const navigate = useNavigate();
  const logoutUser = () => {
    logOut()
      .then(() => {
        toast.warn("Logout success");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      })
      .catch(() => {});
  };
  return (
    <div className="relative ">
      <ToastContainer />
      <div className="shadow-sm bg-gradient-to-r from-pink-200 via-white to-pink-200 z-50">
        <div className="navbar w-[90%] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-pink-500 font-bold hover:bg-pink-100"
                        : "hover:bg-pink-100"
                    }
                    to={"/"}
                  >
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-pink-500 font-bold hover:bg-pink-100"
                        : "hover:bg-pink-100"
                    }
                    to={"/favourite_events"}
                  >
                    FavouriteEvents
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-pink-500 font-bold hover:bg-pink-100"
                        : "hover:bg-pink-100"
                    }
                    to={"/booked"}
                  >
                    Booked
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-pink-500 font-bold hover:bg-pink-100"
                        : "hover:bg-pink-100"
                    }
                    to={"/about"}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link to={"/"} className="btn hover:bg-pink-300 btn-ghost group text-xl">
              EventLy{" "}
              <span>
                <img
                  src={logo}
                  className="w-8 group-hover:rotate-180 ransition duration-500"
                  alt=""
                />
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu flex gap-8 menu-horizontal px-1 ">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-pink-500 font-bold hover:bg-pink-100"
                      : "hover:bg-pink-100"
                  }
                  to={"/"}
                >
                  {" "}
                  Home{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-pink-500 font-bold hover:bg-pink-100"
                      : "hover:bg-pink-100"
                  }
                  to={"/favourite_events"}
                >
                  FavouriteEvents
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-pink-500 font-bold hover:bg-pink-100"
                      : "hover:bg-pink-100"
                  }
                  to={"/booked"}
                >
                  Booked
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-pink-500 font-bold hover:bg-pink-100"
                      : "hover:bg-pink-100"
                  }
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="relative group">
                <Link to="/profile">
                  <img
                    className="w-10 h-10 rounded-full object-cover mr-4"
                    src={user?.photoURL}
                    alt="Profile"
                  />
                  {
                    // console.log(user)
                  }
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-pink-200 text-black w-max text-sm px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Visit Profile: <span className="font-bold">{user.displayName}</span>
                </div>
              </div>
            ) : (
              <img
                className="w-10 h-10 rounded-full object-cover mr-4"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="Default Profile"
              />
            )}

            {user ? (
              <Link onClick={logoutUser} className="btn ml-1 hover:bg-pink-300 ">
                Logout
              </Link>
            ) : (
              <Link to={"/login"} className="btn ml-1 hover:bg-pink-300 ">
                Login
              </Link>
            )}
            {
              <Link to={"/register"} className="btn ml-1 hover:bg-pink-300 ">
              Register
            </Link>
            }
          </div>
        </div>
      </div>
      <div className=" bg-pink-300 w-[500px] h-[500px] rotate-45 rounded-xl absolute top-10 left-1/2 -translate-x-1/2 -z-10 opacity-30"></div>
      <div className="loading-ring bg-pink-500 w-[500px] h-[500px] rotate-45 rounded-xl absolute top-10 left-1/3 -translate-x-1/2 -z-10 opacity-30"></div>
      <div className="loading-ring bg-pink-500 w-[500px] h-[500px] rotate-45 rounded-xl absolute top-10 right-1/113 -translate-x-1/2 -z-10 opacity-30"></div>
    </div>
  );
}

export default Navbar;
