import { Route, Routes } from "react-router-dom"
import Splash from "./pages/Splash"
import Landing from "./pages/Landing"
import Login from './pages/signup/Login'
import Createaccount from './pages/signup/Createaccount'
import Setup from "./pages/setup/Setup"
import Error from "./pages/Error"
import ForgotPassword from "./components/signup/ForgotPassword"
import VerifyEmail from "./components/signup/VerifyEmail"
import SuccesPage from "./components/signup/SuccesPage"
import ResetPassword from "./components/signup/ResetPassword"
import CompaySetup from "./pages/company setup/CompaySetup"
import { SignupProvider } from "./context/SignUpContext"
import SelectUser from "./pages/signup/SelectUser"

function App() {
  return (
    <SignupProvider>
      <Routes>
        <Route path="/" element={<Setup />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="/succusspage" element={<SuccesPage />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/signup" element={<Createaccount />} />
        <Route path="/selectUser" element={<SelectUser />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </SignupProvider>
  )
}
export default App
