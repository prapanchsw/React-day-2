import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Firstn = () => {
  var[s,news]=useState({sname:"",Age:"",Place:"",Email:""  })
  const InputHand=(e)=>{
    console.log(s)
    news({...s,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <TextField variant='outlined' label="Name" onChange={InputHand} name="sname" value={s.sname}></TextField><br /><br />
      <TextField variant='outlined' label="Age"onChange={InputHand} name="Age" value={s.Age}></TextField><br /><br />
      <TextField variant='outlined' label="Place" onChange={InputHand} name="Place" value={s.Place}></TextField><br /><br />
      <TextField variant='outlined' label="Email" onChange={InputHand} name="Email" value={s.Email}></TextField><br /><br />
      <Button>Submit</Button>
    </div>
  )
}

export default Firstn
