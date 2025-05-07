
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(app)

export const MyContext = createContext();


export const FavProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // auth
    const loginUser = (email , password)=>{
      setLoading(true);
     return  signInWithEmailAndPassword(auth , email , password)
    }
    const registerUser = (email , password)=>{
      setLoading(true);
     return createUserWithEmailAndPassword(auth , email , password)
    }

    const logOut = () => {
      return signOut(auth);
    };
    const updateUser = (updatedData) => {
      return updateProfile(auth.currentUser, updatedData);
    };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => {
        unsubscribe();
      };
    }, []);

    // googl auth 
    const googlProvider = new GoogleAuthProvider()
    const popUpForGoogle =()=>{
      setLoading(true);
         signInWithPopup(auth , googlProvider )
    } 
  

    // cardReletedList
    const [favListId, setFavListId] = useState(() => {
    const storedIds = localStorage.getItem("favListId");
    return storedIds ? JSON.parse(storedIds) : [];
  });
  useEffect(() => {
    localStorage.setItem("favListId", JSON.stringify(favListId));
  }, [favListId]);

    const [booked , setBooked] = useState(()=>{
        const storeBooked = localStorage.getItem('booked')
        return storeBooked? JSON.parse(storeBooked) : [] ;
    })
   useEffect(()=>{
    localStorage.setItem('booked' , JSON.stringify(booked))
   }, [booked])
   
// booked 
    const [showReview, setShowReview] = useState(null);
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(5);
    
  //  contextData
  const context = {
    showReview , setShowReview ,reviewText , setReviewText , rating , setRating ,
    popUpForGoogle ,

    updateUser,
    
    loading,
    setLoading ,

    user,
    setUser,

    registerUser,

    loginUser,

    logOut ,

    booked,
    setBooked,

    favListId,
    setFavListId
  };

  return (
    <MyContext.Provider value={context}>
      {children}
    </MyContext.Provider>
  );
};
