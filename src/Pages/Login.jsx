import React, { useContext, useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router";
import { MyContext } from "../ContextAndAuth/Context";
import { toast, ToastContainer } from "react-toastify";

// import { MyContext } from '../ContextAndAuth/Context'

function Login() {
  useEffect(() => {
        document.title = "Login | EventLy";
      }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const { user, setUser, loginUser, popUpForGoogle } = useContext(MyContext);

  const [passVissible, setPassVissible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      if (email && password) {
        loginUser(email, password)
          .then((result) => {
            const userL = result.user;
            setUser(userL);
            toast("Login Success");
            setTimeout(() => {
              navigate(`${location.state ? location.state : "/"}`);
            }, 1500);
          })
          .catch((error) => {
            toast.error("Login Filed");
            setAuthError(error.code);
          });
      }
    } else {
      setAuthError("User Already LoggedIn");
    }
  };

  const eyeButton = () => {
    setPassVissible(!passVissible);
  };

  const handleGoogleLogin = () => {
    if (!user) {
      popUpForGoogle()
        .then((result) => {
          const userL = result.user;
          setUser(userL);
          toast("Login Success");
          navigate("/");
          // console.log("User info:", user);
        })
        .catch((error) => {
          setAuthError(error);
        });
    } else {
      setAuthError("User Alreay LoggedIn");
    }
  };

  return (
    <div className="w-[90%] mx-auto mt-12 flex items-center justify-center px-4">
      <ToastContainer />
      <div className="w-full max-w-md bg-pink-50 rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
          Login to EventLy
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block relative text-gray-700 mb-1" htmlFor="">
              Password{" "}
              {passVissible ? (
                <IoMdEyeOff
                  size={20}
                  type="button"
                  onClick={eyeButton}
                  className="top-10 right-4 absolute cursor-pointer"
                />
              ) : (
                <IoMdEye
                  size={20}
                  type="button"
                  onClick={eyeButton}
                  className="top-10 right-4 absolute cursor-pointer"
                />
              )}
            </label>

            <input
              type={!passVissible ? "password" : "text"}
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {authError && <div className="text-red-500">{authError}</div>}

          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold py-2 rounded-lg transition-all"
          >
            Login
          </button>
          <p
            onClick={() => navigate("/forgot-password", { state: { email } })}
            className="text-sm text-blue-500 cursor-pointer mt-2"
          >
            Forgot password?
          </p>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="btn bg-white w-full mt-5 hover:bg-pink-200 text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">
          Don't have an account?{" "}
          <Link to={"/register"} className="text-pink-500 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
