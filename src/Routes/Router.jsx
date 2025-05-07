import {
  createBrowserRouter
} from "react-router";

import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CategorySports from "../Pages/CategorySports";
import FavouriteEvents from "../Pages/FavouriteEvents";
import Booked from "../Pages/Booked";
import PrivateRoute from "../ContextAndAuth/PrivateRoute";
import Profile from "../Pages/Profile";
import ForgotPassword from "../Pages/ForgotPass";
import Review from "../Pages/Review";
import UpcommingDetails from "../Pages/UpcommingDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />
      },
      {
        path: '/category/:id',
        element:(
          <PrivateRoute >
        <CategorySports /> 
   </PrivateRoute>
        ),
        loader: () => fetch('/sports_data.json')
      },
      {
        path : '/favourite_events',
        element: (<PrivateRoute >
        <FavouriteEvents />
   </PrivateRoute>),

        loader: () => fetch('/sports_data.json')
      },
      {
        path : '/booked',
        element: (<PrivateRoute >
             <Booked /> 
        </PrivateRoute>),
        loader: () => fetch('/sports_data.json')
      },
      {
        path: '/comming-event-details/:id' ,
        element: 
        (<PrivateRoute >
          <UpcommingDetails />
     </PrivateRoute>),
       loader: () => fetch('/UpComming.json')
      }
    ]
  }
])
