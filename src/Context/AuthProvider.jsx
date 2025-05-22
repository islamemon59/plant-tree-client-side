import React, { useEffect, useState } from 'react';
import { AuthContext } from './CreateContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase.config';

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [plants, setPlants] = useState([])

    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
       return signInWithPopup(auth, provider)
    }

          const updateUserProfile = (updatedProfile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updatedProfile)
    }

          const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
      };

          useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false)
        });
    
        return () => {
          unSubscribe()
        }
      }, []);

    const userInfo = {
        user,
        plants,
        setPlants,
        loading,
        setUser,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        updateUserProfile,
    }
    return <AuthContext value={userInfo}>{children}</AuthContext>
};

export default AuthProvider;