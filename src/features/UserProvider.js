import React, { createContext, useContext, useState } from 'react';


const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);


    // useEffect(() => {
    //     // On component mount, check if there is a session saved in localStorage
    //     const storedUserId = localStorage.getItem("userId");
    //     if (storedUserId) {
    //         setUserId(storedUserId);
    //     }
    // }, []);

    // const login = (id) => {
    //     setUserId(id);
    //     localStorage.setItem("userId", id); // Store in localStorage for persistence
    // };

    // const logout = () => {
    //     setUserId(null);
    //     localStorage.removeItem("userId"); // Remove from localStorage
    // };

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
