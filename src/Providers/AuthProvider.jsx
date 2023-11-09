import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext= createContext(null);
const auth= getAuth(app);

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const [user,setUser]= useState([]);
    const [loading,setLoading]= useState(true);

    const register=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider);
    }

    const logout=()=>{
        return signOut(auth);
    }

    const profileUpdate=(name, imageURL)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: imageURL,
        })
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            // const userEmail = currentUser?.email || user?.email;
            // const loggedUser = { email: userEmail };
            setLoading(false);
            // if (currentUser) {
            //     axios.post('https://online-group-study-server-sand.vercel.app/jwt', loggedUser, { withCredentials: true })
            //         .then(res => {
            //             console.log('token response', res.data);
            //         })
            // }
            // else {
            //     axios.post('https://online-group-study-server-sand.vercel.app/logout', loggedUser, {
            //         withCredentials: true
            //     })
            //         .then(res => {
            //             console.log(res.data);
            //         })
            // }
        })
        return ()=>{
            unSubscribe();
        }
    },[user?.email])
    const authInfo={
        user,
        register,
        login,
        googleLogin,
        logout,
        profileUpdate,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;