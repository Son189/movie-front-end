
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './Home'
import MovieCard from './moviecard'

import List from './lists'


function App() {
 

  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign" element={<Signup/>}/>
          <Route path="/moviecard" element={<MovieCard/>}/>
       
          <Route path="/list" element={<List/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

 export default App


