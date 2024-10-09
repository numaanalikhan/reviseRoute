import React , {useState} from "react"
import Header from "./Components/Header";
import Home from "./Components/Home";
import Product from "./Components/Product";
import {  Route,Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Specification from './Components/Specification'

function App (){
  var [isLoggedIn,setIsLoggedIN] = useState(false);
  return(
    <>
    {console.log("App is rendered at initial load ")}
    <Header isLoggedIn={isLoggedIn} setIsLoggedIN={setIsLoggedIN}/>
    <Routes>
      <Route path="/" element={<Home/>} />
    {isLoggedIn===true ?  <Route path="/products" element={<Product/>}/>:""}
      <Route path="/*" element={<NotFound/>}/>

      <Route path="/product/:productId" element={<Specification/>}/>
    </Routes>
    </>
  )
}
export default App;