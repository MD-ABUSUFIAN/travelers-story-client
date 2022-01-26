import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Login/Firebase/firebase.init";
import { getAuth,signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
initializeFirebase();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [authError,setAuthError]=("")
    const auth = getAuth();

    const registerUser=(email,password)=>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
        setAuthError('');
        // ...
       })
       .catch((error) => {
        setAuthError(error.message)
        // ..
         }).finally(()=>setIsLoading(false))
       };

       const loginUser=(email,password)=>{
         setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
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
        isLoading,
        authError,
    }

}

export default useFirebase;