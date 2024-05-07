import { Route, Routes } from 'react-router-dom'
import './App.css'
import NotRequireAuth from "./Components/Auth/NotRequireAuth"
import RequireAuth from "./Components/Auth/RequireAuth"
import About from './Pages/About'
import Contact from './Pages/Contact'
import Denied from './Pages/Denied'
import Homepage from './Pages/Homepage'
import Login from "./Pages/Login"
import NotFound from './Pages/NotFound'
import ChangePassword from './Pages/Password/ChangePassword'
import ForgetPassword from './Pages/Password/ForgetPassword'
import ResetPassword from './Pages/Password/ResetPassword'
import Signup from "./Pages/Signup"
import EditProfile from './Pages/User/EditProfile'
import Profile from './Pages/User/Profile'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/denied" element={<Denied />} />
      <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
      <Route path="/denied" element={<Denied />} />
      <Route element={<NotRequireAuth />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/editprofile" element={<EditProfile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
