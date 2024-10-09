import React, {useState} from "react";
import { Navigate, NavLink} from "react-router-dom";
function Header({isLoggedIn,setIsLoggedIN}){
   
    return(
        <>
        {
            console.log("Header component is rendered at inital load")
        }
        <div className="flex justify-center gap-4 bg-green-100 h-12 items-center text-indigo-600">
            <NavLink to="/">Home</NavLink>
           {
            isLoggedIn === true ? <>
            <NavLink to="/products">Products</NavLink>
            </>
            :<Navigate to="/"/>
        }
            <button 
            onClick={()=>{
               isLoggedIn === false ?setIsLoggedIN(true) : setIsLoggedIN(false);
            }}
            className="px-5 py-2 border-2 border-black bg-indigo-400 text-white font-bold rounded-xl">{
                isLoggedIn === false ? "Log IN" : "Log Out"
            }</button>
        </div>
        </>
    )
}
export default Header;