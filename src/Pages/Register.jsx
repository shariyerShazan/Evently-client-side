import React, { useContext, useEffect, useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { Link, useNavigate } from 'react-router'
import { MyContext } from '../ContextAndAuth/Context';
import { toast, ToastContainer } from 'react-toastify';

function Register() {
  useEffect(() => {
        document.title = "Register | EventLy";
      }, []);

  const navigate = useNavigate()

   const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
  
    const isValidPassword = (password) => {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
    };
  
    const {registerUser, setUser , user, updateUser , popUpForGoogle} = useContext(MyContext)
    const [passError , setPassError]= useState('')
    const [emailError , setEmailError] = useState('')
    const [nameError , setNameError] = useState('')
    const [authError , setAuthError] = useState('')


  const [ passVissible , setPassVissible] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    photoURL: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { email, password, name , photoURL } = formData;
  
    if (name.length < 6) {
      setNameError('Name should be at least 6 charecters');
      return;
    } else {
      setNameError('');
    }
  
    if (!isValidEmail(email)) {
      setEmailError('Invalid Email Format');
      return;
    } else {
      setEmailError('');
    }
  
    if (!isValidPassword(password)) {
      setPassError('Enter a strong password: at least 8 characters with uppercase, lowercase, number and symbol.');
      return;
    } else {
      setPassError('');
    }

   if(!nameError && !passError && !emailError){
    registerUser(email, password)
    .then((result) => {
      toast.success('User Register Success')
      const userL = result.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...userL, displayName: name, photoURL: photoURL });

          })
       setTimeout(() => {
            navigate("/");
            }, 1500);
     })
    .catch((error) =>
       {
        setAuthError(error.code)
         toast.error('Registration Failed')});
   }
  };

  const handleGoogleLogin = ()=>{
      if(!user){
        popUpForGoogle()
        .then((result) => {
          const userL = result.user;
          setUser(userL)
          toast("Login Success");
          navigate('/')
          // console.log("User info:", user);
        })
        .catch((error) => {
          setAuthError(error)
        });
      }else{
        setAuthError('User Alreay LogedIn')
      }
    
    }

  
  const eyeButton = ()=>{
    setPassVissible(!passVissible)
  }

  return (
    <div className="w-[90%] mx-auto flex items-center justify-center px-4 mt-4 mb-8">
      <ToastContainer />
      <div className="w-full max-w-md bg-pink-50 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-4">Register on EventLy</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:outline-none"
            />
          </div>
          {
            nameError && <span className='text-red-500'>{nameError}</span>
          }

          <div>
            <label className="block mb-1 text-gray-700" htmlFor="photoURL">Photo URL</label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              required
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:outline-none"
            />
          </div>
          {
            emailError && <span className='text-red-500 mb-1'>{emailError}</span>
          }

          <div>
            <label className="block relative text-gray-700 mb-1" htmlFor=''>Password {passVissible? <IoMdEyeOff size={20}
                        type='button'
                        onClick={eyeButton}
                        className='top-10 right-4 absolute cursor-pointer'/> : <IoMdEye size={20}
                        type='button'
                        onClick={eyeButton}
                        className='top-10 right-4 absolute cursor-pointer'/>}</label>
            <input
              type={!passVissible? 'password' : 'text'}
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:outline-none"
            />
          </div>
          {
            passError && <span className='text-red-500'>{passError}</span>
          }
          {authError && <span className='text-red-500 '>{authError}</span> }

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Register
          </button>
          <button
          onClick={handleGoogleLogin}
         className="btn bg-white w-full  hover:bg-pink-200 text-black border-[#e5e5e5]">
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

        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to={"/login"} className="text-pink-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
