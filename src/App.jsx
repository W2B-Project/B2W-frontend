import { Route, Routes } from "react-router-dom"
/* global */
import Splash from "./pages/Splash"
import Landing from "./pages/Landing"
import Login from './pages/signup/Login'
import Createaccount from './pages/signup/Createaccount'
import ForgotPassword from "./components/signup/ForgotPassword"
import VerifyEmail from "./components/signup/VerifyEmail"
import SuccesPage from "./components/signup/SuccesPage"
import ResetPassword from "./components/signup/ResetPassword"
import Error from "./pages/Error"
import Settings from "./pages/Settings/Settings"
import Language from "./components/Settings/Language"
import Managepasswords from "./components/Settings/Managepasswords"
import NotificationSettings from "./components/Settings/NotificationSettings"
import Logout from './components/Settings/Logout'
import SelectUser from "./pages/signup/SelectUser"
/* user */
import Setup from "./pages/setup/Setup"
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
import EditAllPage from "./components/UserProfile/Professional Info/global/EditAllPage"
import EditSkills from "./components/UserProfile/Professional Info/skills/EditSkills"
import EditResume from "./components/UserProfile/Professional Info/resume/EditResume"

/* company */
import CompaySetup from "./pages/company setup/CompaySetup"
import HomeCom from "./Company/pages/HomeCom"
import CompanyProfile from "./Company/pages/CompanyProfile"
import About from './Company/components/CompanyProfile/About/About'
import People from "./Company/components/CompanyProfile/People/People"
import OpendJobs from "./Company/components/CompanyProfile/opend_Jobs/OpendJobs"
import Reviews from "./Company/components/CompanyProfile/reviews/Reviews"
import EditCompanyInfo from "./Company/components/CompanyProfile/EditCompanyInfo"
import JobDetails from "./Company/components/Company_Home/JobDetails"
import PostJob from "./Company/components/Company_Home/PostJob"

/* providers */
import JobProvider from "./context/JobContext"
import InfoProvider from "./context/Professinoal_InfoContext"
import CompanyInfoProvider from "./context/CompanyInfoContext"
import EditAccessability from "./Company/components/CompanyProfile/About/EditAccessability"
import AddPeople from "./Company/components/CompanyProfile/People/AddPeople"
import PostedJobsList from "./Company/components/Company_Home/PostedJobsList"
import PostProvider from "./context/PostContext"
import ProtectedRoutes from "./routes/ProtectedRoutes"
import { AuthProvider } from "./context/AuthContext"
import JobApplications from "./Company/components/Company_Home/JobApplications"
import ApplicationDetails from "./Company/components/Company_Home/ApplicationDetails"
import SetupProvider from "./context/SetupContext"

function App() {
  return (
    <AuthProvider>
      <SetupProvider>
        <CompanyInfoProvider>
          <InfoProvider>
            <JobProvider>
              <PostProvider>
                {/* start routing /////////////////////////////////////////////////////////////////////// */}
                <Routes>
                  <Route path="/" element={<Splash />} />
                  <Route path="/landing" element={<Landing />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Createaccount />} />
                  {/* protected routes */}
                  <Route element={<ProtectedRoutes />}>
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
                    <Route path='/userProfile' element={<UserProfile />}>
                      <Route index element={<Posts />} />
                      <Route path="posts" element={<Posts />} />
                      <Route path="Info" element={<ProfessionalInfo />} >
                        <Route path="edit" element={<EditAllPage />} />
                        <Route path="editSkills" element={<EditSkills />} />
                        <Route path="editCV" element={<EditResume />} />
                      </Route>
                      <Route path="Achievements" element={<Achievements />}>
                        <Route path="edit" element={<EditAllPage />} />
                      </Route>
                      <Route path="Saved" element={<Saved />} />
                    </Route>

                    <Route path="/company/chats" element={<Chats />} />
                    <Route path="/home-Company" element={<HomeCom />}>
                      <Route index element={<PostedJobsList />} />
                      <Route path="applications" element={<PostedJobsList />} />
                      <Route
                        path="allApplications"
                        element={<JobApplications />}
                      />
                      <Route path="PostJob" element={<PostJob />} />
                      <Route
                        path="allApplications/:applicationId"
                        element={<ApplicationDetails />}
                      />
                      <Route path="chats" element={<Chats />} />
                    </Route>
                    <Route path="jobdetails" element={<JobDetails />} />
                    <Route path="EditAccessability" element={<EditAccessability />} />
                    {/* company Profile Routes */}
                    <Route path='/companyProfile' element={<CompanyProfile />}>
                      <Route index element={<About />} />
                      <Route path="about" element={<About />} />
                      <Route path="opendJobs" element={<OpendJobs />} />
                      <Route path="people" element={<People />} >
                        <Route path="AddPeople" element={<AddPeople />} />
                      </Route>
                      <Route path="reviews" element={<Reviews />} />
                    </Route>
                    <Route path="EditCompanyInfo" element={<EditCompanyInfo />} />

                    {/* settigs */}
                    <Route path="/settings" element={<Settings />}>
                      <Route index element={<Language />} />
                      <Route path="lang" element={<Language />} />
                      <Route path="managepass" element={<Managepasswords />} />
                      <Route path="notification" element={<NotificationSettings />} />
                      <Route path="logout" element={<Logout />} />
                    </Route>
                  </Route>
                  {/* error routes */}
                  <Route path="*" element={<Error />} />
                </Routes>
              </PostProvider>
            </JobProvider>
          </InfoProvider>
        </CompanyInfoProvider>
      </SetupProvider>
    </AuthProvider>
  )
}
export default App
