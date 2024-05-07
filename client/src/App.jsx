import { Route, Routes } from 'react-router-dom'
import './App.css'
import NotRequireAuth from "./Components/Auth/NotRequireAuth"
import About from './Pages/About'
import Contact from './Pages/Contact'
import Homepage from './Pages/Homepage'
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route element={<NotRequireAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  )
}

export default App
