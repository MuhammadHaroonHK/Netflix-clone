import Home from "./home/Home"
import { Route, Routes } from "react-router-dom"
import Login from './login/Login.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
      
    </>
  )
}

export default App
