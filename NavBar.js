import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar()
{
    return (
        <nav> 
            <NavLink to="/Home">Home </NavLink><br></br>
            <NavLink to="/About">About</NavLink><br></br>
            <NavLink to="/Service">Service</NavLink><br></br>
            <NavLink to="/Contact">Contact</NavLink>
            

        </nav>
    )

}