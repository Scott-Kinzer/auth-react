import React from 'react';
import { useContext , useState, useEffect} from 'react';
import {auth} from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

function AuthProviderFC({ children }) {

    const [currentUser, setCurrentUser] = useState();

    async function signup(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return console.log(userCredential);
        } catch (error) {
            return console.log(error);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            setCurrentUser(user);
        })

        return unsubscribe;
    })


    const value = {
        currentUser, 
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProviderFC;