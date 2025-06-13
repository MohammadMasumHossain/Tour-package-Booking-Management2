import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

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
        singOutUser
       
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;