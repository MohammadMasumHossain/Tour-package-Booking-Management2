import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';



const googleProvider =new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [loading,setLoading]=useState(true);
    const[user,setUser]=useState(null)
   

    // 
    const createUser = (email, password, name, photo) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const currentUser = userCredential.user;

      // Update display name and photo
      await updateProfile(currentUser, {
        displayName: name,
        photoURL: photo,
      });

      // Force Firebase to reload the updated profile info
      await auth.currentUser.reload();

      // Update state with refreshed user
      setUser(auth.currentUser);
      setLoading(false);

      return userCredential;
    })
    .catch(error => {
      setLoading(false);
      throw error;
    });
};


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
