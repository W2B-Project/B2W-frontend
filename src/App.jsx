import { Route, Routes } from "react-router-dom"
import Splash from "./pages/Splash"
import Landing from "./pages/Landing"
import Login from './pages/signup/Login'
import Createaccount from './pages/signup/Createaccount'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Splash/>}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Createaccount/>}/>
      </Routes>
    </>
  )
}

export default App
