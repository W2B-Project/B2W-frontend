import { useAuth } from "../context/AuthContext"
import { Outlet, Navigate } from "react-router-dom"

function ProtectedRoutes() {
    const { authUser } = useAuth()
    if (!authUser.token) {
        return <Navigate to='/landing' />
    }
    return <Outlet />
}

export default ProtectedRoutes