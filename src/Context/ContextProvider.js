import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, updateProfile, 
    signOut,
    onAuthStateChanged, } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext=createContext()
const auth=getAuth(app)

const ContextProvider = ({children}) => {
    const [cart,setCart]=useState([])
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)


    //userSignUp
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //userSignIn
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //userNameUpdate
    const userName = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    //sign out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    

    //on authChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()

    }, [])



    const authInfo = {
        createUser,
        userSignIn,
        userName,
        user,
        logOut,
        loading,
        cart,
        setCart

    }

    return (
        <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;