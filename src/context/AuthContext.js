"use client";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react" 
import { auth } from "@/lib/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        },
        (err) => {
            console.error("Auth error", err);
            setError(err.message);
            setLoading(false);
        }
    );
        return () => unsubscribe();
    }, []);

    const logout = () => signOut(auth);

    if(error) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500">
                <p>Something went wrong, please refresh the page</p>
            </div>
        );
    }

    return (
        <AuthContext.Provider value={{user, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
export function useAuth() {
    return useContext(AuthContext);
}