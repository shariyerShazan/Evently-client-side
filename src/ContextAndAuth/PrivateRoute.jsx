import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";
import LoadingPage from "../Pages/LoadingPage";
import { MyContext } from "./Context";
import { toast, ToastContainer } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(MyContext);
  const location = useLocation();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!loading && !user?.email) {
      toast.warn("Please Login First");

     
      setTimeout(() => {
        setRedirect(true);  
      }, 1500);
    }
  }, [loading, user]);

//   if (loading) {
//     return <LoadingPage />;
//   }

  if (redirect) {
    return <Navigate to="/login" state={location.pathname} />;
  }

  if (user && user?.email) {
    return children;
  }

  return (
    <>
      <ToastContainer />
    </>
  );
};

export default PrivateRoute;
