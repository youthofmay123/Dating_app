import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/config'; // Đảm bảo bạn đã export auth từ config

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({ displayName, email, uid, photoURL });
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return <AuthContext.Provider value={{ user, isLoading }}>{children}</AuthContext.Provider>;
}
