import { useState, useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const [showPassword, setShowPassword] = useState(true);
    const [selectUser, setSelectUser] = useState(false)
    const navigate = useNavigate()
    const [authUser, setAuthUser] = useState(() => {
        const storedAuth = localStorage.getItem('authUser');
        return storedAuth
            ? JSON.parse(storedAuth)
            : {
                token: "",
                email: "",
                firstName: "",
                lastName: "",
                userId: "",
                roles: [],
                isAuthenticated: false,
            }

    })


    useEffect(() => {
        const authData = JSON.parse(localStorage.getItem('authUser'));
        if (authData) {
            setAuthUser(authData);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('authUser')
        setAuthUser({
            token: "",
            email: "",
            firstName: "",
            lastName: "",
            userId: "",
            roles: [],
            isAuthenticated: false,
        });
        navigate('/landing')
    }

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser, logout, showPassword, setShowPassword, selectUser, setSelectUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}