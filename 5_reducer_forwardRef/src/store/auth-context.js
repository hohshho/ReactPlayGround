import React, { useState, useEffect } from 'react';

// 선언을 해주면 IDE 자동 완성 가능
const AuthContext = React.createContext({
    iosLoggedIn: false,
    onLogout: () => {},
    onLogin: () => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === true) {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.setItem('isLoggedIn', true);
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
