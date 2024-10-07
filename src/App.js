import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import About from './Components/About'
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
function App(){
  return(
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App;