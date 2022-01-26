import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Login/Firebase/firebase.init";
import { getAuth,signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
initializeFirebase();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(false)
    const auth = getAuth();

    const registerUser=(email,password)=>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
        
        setUser(userCredential.user);
        // ...
       })
       .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
         }).finally(()=>setIsLoading(false))
       };

       const loginUser=(email,password)=>{
         setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        }).finally(()=>setIsLoading(false))
      
       }


 const logOut=()=>{
   setIsLoading(true)
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
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
    }

}

export default useFirebase;