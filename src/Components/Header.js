import React from "react"
import { Link } from "react-router-dom";

function Header (){
    return(
        <div className="bg-indigo-300 flex items-center gap-5 justify-center text-white font-bold  p-5">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        </div>
    )
}

export default Header;

// named and default export///
