import { createContext, useState, useContext } from "react";

const SignupContext = createContext();

function SignupProvider({ children }) {
    const [showPassword, setShowPassword] = useState(true);
    const [selectUser, setSelectUser] = useState(false)

    return (
        <SignupContext.Provider value={{ showPassword, setShowPassword ,selectUser, setSelectUser}}>
            {children}
        </SignupContext.Provider>
    );
}

function useSignUp() {
    const context = useContext(SignupContext);
    if (!context) {
        throw new Error("useSignUp must be used within a SignupProvider");
    }
    return context;
}

export { SignupProvider, useSignUp };
