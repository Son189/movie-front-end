
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
 

  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

 export default App


