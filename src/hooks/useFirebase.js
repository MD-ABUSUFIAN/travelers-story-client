import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Login/Firebase/firebase.init";
import {signInWithPopup,GoogleAuthProvider, getAuth,signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
initializeFirebase();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [authError,setAuthError]=("")
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleLogin=(location,navigate)=>{
      setIsLoading(true)
      signInWithPopup(auth, googleProvider)
     .then((result) => {

    const user = result.user;
    setUser(user);
    const destination=location?.state?.from || '/';
    navigate(destination);
    setAuthError('');
    // ...
  })       .catch((error) => {
    setAuthError(error.message)
    // ..
     }).finally(()=>setIsLoading(false))
   };

    const registerUser=(email,password,displayName,navigate)=>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
        setAuthError('');
        navigate('/')
        // ...
       })
       .catch((error) => {
        setAuthError(error.message)
        // ..
         }).finally(()=>setIsLoading(false))
       };

       const loginUser=(email,password,location,navigate)=>{
         setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination=location?.state?.from || '/';
          navigate(destination)
          setAuthError('');
        })
        .catch((error) => {
          const errorMessage = error.message;
          setAuthError(errorMessage)
        }).finally(()=>setIsLoading(false))
      
       }


    const logOut=()=>{
         setIsLoading(true)
         signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        setAuthError(error.message)
        }).finally(()=>setIsLoading(false))
 };

 useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setUser({})
        }
        setIsLoading(false)
      });
      return ()=>unSubscribe;
 },[])
    return{
        user,
        registerUser,
        loginUser,
        logOut,
        googleLogin,
        isLoading,
        authError,
    }

}

export default useFirebase;