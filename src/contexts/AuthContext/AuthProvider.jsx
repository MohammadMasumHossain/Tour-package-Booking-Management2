// import React, { useEffect, useState } from 'react';
// import { AuthContext } from './AuthContext';
// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
// import { auth } from '../../firebase/firebase.init';



// const googleProvider =new GoogleAuthProvider();

// const AuthProvider = ({children}) => {

//     const [loading,setLoading]=useState(true);
//     const[user,setUser]=useState(null)
   

//     // 
//     const createUser = (email, password, name, photo) => {
//   setLoading(true);
//   return createUserWithEmailAndPassword(auth, email, password)
//     .then(async (userCredential) => {
//       const currentUser = userCredential.user;

//       // Update display name and photo
//       await updateProfile(currentUser, {
//         displayName: name,
//         photoURL: photo,
//       });

//       // Force Firebase to reload the updated profile info
//       await auth.currentUser.reload();

//       // Update state with refreshed user
//       setUser(auth.currentUser);
//       setLoading(false);

//       return userCredential;
//     })
//     .catch(error => {
//       setLoading(false);
//       throw error;
//     });
// };


//     const login=(email,password)=>{
//       setLoading(true);
//       return signInWithEmailAndPassword(auth,email,password)
//     }

//     const singInWithGoogle =()=>{
//       setLoading(true);
      
//       return signInWithPopup(auth,googleProvider)
      
//     }

//     const singOutUser =()=>{
//         setLoading(true);
//         return signOut(auth)
//     }

//     useEffect(()=>{
//       const unSubscribe =onAuthStateChanged(auth,currentuser=>{
//         setUser(currentuser);
//         setLoading(false);
//         console.log('user in the auth state change',currentuser)
//       })
//       return ()=>{
//         unSubscribe();
//       }
//     },[])
//     const authInfo={
//         loading,
//         user,
//         createUser,
//         login,
//         singOutUser,
//         singInWithGoogle
       
//     }
//     return (
//         <AuthContext value={authInfo}>
//             {children}
//         </AuthContext>
//     );
// };

// export default AuthProvider;


import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { toast } from 'react-toastify';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const saveToken = async (currentUser) => {
    if (!currentUser) return;
    const token = await currentUser.getIdToken();
    localStorage.setItem('accessToken', token);
    setUser(currentUser);
  };

  // ✅ Register with toast
  const createUser = (email, password, name, photo) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const currentUser = userCredential.user;

        await updateProfile(currentUser, {
          displayName: name,
          photoURL: photo,
        });

        await auth.currentUser.reload();
        await saveToken(auth.currentUser);

        
        setLoading(false);
        return userCredential;
      })
      .catch(error => {
        setLoading(false);
        toast.error(error.message);
        throw error;
      });
  };

  // ❌ No toast here
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await saveToken(userCredential.user);
        setLoading(false);
        return userCredential;
      })
      .catch(error => {
        setLoading(false);
        throw error;
      });
  };

  // ❌ No toast here
  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then(async (userCredential) => {
        await saveToken(userCredential.user);
        setLoading(false);
        return userCredential;
      })
      .catch(error => {
        setLoading(false);
        throw error;
      });
  };

  const singOutUser = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        setUser(null);
        localStorage.removeItem('accessToken');
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await saveToken(currentUser);
      } else {
        setUser(null);
        localStorage.removeItem('accessToken');
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    user,
    createUser,
    login,
    singOutUser,
    singInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
