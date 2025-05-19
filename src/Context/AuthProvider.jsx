import React, { useState } from 'react';
import { AuthContext } from './CreateContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase.config';

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)

    console.log(user);

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
       return signInWithPopup(auth, provider)
    }

    const userInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        signInWithGoogle,
    }
    return <AuthContext value={userInfo}>{children}</AuthContext>
};

export default AuthProvider;