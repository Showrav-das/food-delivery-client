import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import firebaseAuthentication from '../Components/Login/Firebase/Firebase.int';

firebaseAuthentication();

const UseFirebase = () => {
    const [users, setUsers] = useState({});
    const [isLoad, setIsLoad] = useState(true);

    const auth = getAuth();

    const signInGoogle = () => {
        setIsLoad(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user);
            })
            .finally(() => setIsLoad(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            user ? setUsers(user) : setUsers({});
        
        setIsLoad(false);
    });
    return () => unsubscribe;
    }, [])

    const logOut = () => {
        setIsLoad(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoad(false));
    }

   
    return {
        users,
        signInGoogle,logOut,isLoad
    }
}

export default UseFirebase;