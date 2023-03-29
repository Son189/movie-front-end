import "./App.css"
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home'
import List from './lists'
import Nav from './Navbar'


function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign" element={<Signup/>}/>  
          <Route path="/list" element={<List/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

 export default App


