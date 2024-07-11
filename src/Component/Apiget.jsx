import { TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from "axios"

const Apiget = () => {
  var[j,newj]=useState([])
    // useEffect(()=>{},[])
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res);
            newj(res.data)
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);
  return (
    <div>
      <Typography variant='h2'>Axios</Typography>
    <TableContainer>
      <TableHead><TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>UserName</TableCell>
        </TableRow></TableHead>
        <TableBody>
          {j.map((val,i)=>{
            return(
              <TableRow key={i}>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.phone}</TableCell>
                <TableCell>{val.username}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </TableContainer>   
    </div>
  )
}

export default Apiget
