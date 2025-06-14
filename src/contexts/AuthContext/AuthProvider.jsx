import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';


const googleProvider =new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [loading,setLoading]=useState(true);
    const[user,setUser]=useState(null)

    const createUser=(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login=(email,password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password)
    }

    const singInWithGoogle =()=>{
      setLoading(true);
      return signInWithPopup(auth,googleProvider)
    }

    const singOutUser =()=>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe =onAuthStateChanged(auth,currentuser=>{
        setUser(currentuser);
        setLoading(false);
        console.log('user in the auth state change',currentuser)
      })
      return ()=>{
        unSubscribe();
      }
    },[])
    const authInfo={
        loading,
        user,
        createUser,
        login,
        singOutUser,
        singInWithGoogle
       
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;