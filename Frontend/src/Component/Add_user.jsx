import React from "react";
import axios from "axios"
import { useState } from "react";



export const Add_User = () => {

    const  [Username , setUsername]  = useState()
    const  [mobileNo , setmobileNo]  = useState()
    const  [email , setemail]  = useState()
    const  [address , setaddress]  = useState()

 
    const data = {
        Username : Username,
        mobileNo : mobileNo,
        Email : email,
        Address : address
    }
       
    const handelSubmit = () => {
        axios.post("http://localhost:4000/user", data).then(function(res){
            console.log(res.data)
        })
        alert("Add succesfully")
    }

    return(
        <div>
            <h1>Add Usert</h1>
        
            <label>User Name</label>
            <input 
                type="text"
                placeholder="Enter FirsrName"
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
            /> 
            <br />


            <label>Phone NO</label>
            <input 
                type="text"
                placeholder="Enter mobileNo"
                onChange={(e) => {
                    setmobileNo(e.target.value)
                }}
            /> 
            <br />


            <label>Email</label>
            <input 
                type="text"
                placeholder="Enter Email"
                onChange={(e) => {
                    setemail(e.target.value)
                }}
            /> 
            <br />



            <label>Address</label>
            <input 
                type="text"
                placeholder="Enter Address"
                onChange={(e) => {
                    setaddress(e.target.value)
                }}
            /> 
            <br />


            <button
                onClick={handelSubmit}
            >Add</button>
        </div>
    )
}