import React from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import { BrowserRouter} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Login/>
      </BrowserRouter>
  )

}

export default App
