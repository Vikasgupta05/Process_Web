import React from "react";
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";



export const User = () => {

    const [data , setData] = useState()

    useEffect(() => {
        Data()
    },[])

    const Data = () => {
        axios.get("http://localhost:4000/user").then(function(res){
            setData(res.data)
            console.log("avid" , res.data)
        })
    }



    return(

        <div>
            <h1>Get all User Details</h1>

            <div className="maindiv">
                <table className="table">
                        <thead>
                            <tr>
                                <th className="table">No</th>
                                <th  className="table">User Name</th>
                                <th  className="table">Mobile No</th>
                                <th  className="table">Email</th>
                                <th  className="table">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((el , i ) => {
                                return (
                                    <tr key={i}>
                                        <td className="table">{i+1}</td>
                                        <td className="table">{el.Username}</td>
                                        <td className="table">{el.mobileNo}</td>
                                        <td className="table">{el.Email}</td>
                                        <td className="table">{el.Address}</td>
                                    </tr>
                                )
                                })
                            }
                        </tbody>
                </table>
            </div>
        </div>
    )
}