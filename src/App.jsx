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
import Home from "./pages/home/Home"
import Accessibility from "./components/setup/Accessibility"
import SavedJobs from "./components/home/SavedJobs"
import PostsList from "./components/home/PostsList"
import JobsList from "./components/home/JobsList"
import Chats from "./components/home/Chats"
import Applied from "./components/home/Applied"
import UserProfile from "./pages/userprofile/UserProfile"
import Posts from './components/UserProfile/posts/Posts'
import ProfessionalInfo from "./components/UserProfile/Professional Info/ProfessionalInfo"
import Achievements from "./components/UserProfile/Achievements/Achievements"
import Saved from './components/UserProfile/Saved/Saved'
import JobProvider from "./context/JobContext"
import InfoProvider from "./context/Professinoal_InfoContext"
import EditAllPage from "./components/UserProfile/Professional Info/global/EditAllPage"
import EditSkills from "./components/UserProfile/Professional Info/skills/EditSkills"

function App() {
  return (
    <SignupProvider>
      <JobProvider>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Createaccount />} />
          <Route path="/Setup" element={<Setup />} />
          <Route path="/companysetup" element={<CompaySetup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/succusspage" element={<SuccesPage />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/selectUser" element={<SelectUser />} />
          <Route path="/Accessibility" element={<Accessibility />} />
          <Route path="/SavedJobs" element={<SavedJobs />} />
          {/* home routes */}
          <Route path="/home" element={<Home />}>
            <Route index element={<PostsList />} />
            <Route path="posts" element={<PostsList />} />
            <Route path="jobs" element={<JobsList />} />
            <Route path="chats" element={<Chats />} />
            <Route path="applied" element={<Applied />} />
          </Route>
          {/* userProfile Routes */}
          <Route path='/userProfile' element={
            <InfoProvider>
              <UserProfile />
            </InfoProvider>}>
            <Route path="posts" element={<Posts />} />
            <Route path="Info" element={<ProfessionalInfo />} >
              <Route path="edit" element={<EditAllPage />} />
              <Route path="editSkills" element={<EditSkills/>}/>
            </Route>
            <Route path="Achievements" element={<Achievements />} />
            <Route path="Saved" element={<Saved />} />
          </Route>
          {/* error routes */}
          <Route path="*" element={<Error />} />
        </Routes>
      </JobProvider>
    </SignupProvider>
  )
}
export default App
