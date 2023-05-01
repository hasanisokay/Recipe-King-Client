import React, { createContext, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState("")
    const auth = getAuth(app)
    const register = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login =(email,password)=>{
        
    }


    const authInfo = {user,setUser, login, register}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;