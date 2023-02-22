import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div className="Navbar">
            <div  style={{display : "flex" , justifyContent : "space-between"}}>
            <Link to="/">User</Link>
            <Link to="/addUser">Add User</Link>
            <Link to="/update">Update User</Link>
            </div>
        </div>
    )
}