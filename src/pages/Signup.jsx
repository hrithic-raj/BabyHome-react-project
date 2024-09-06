import React, { useState } from 'react'
import '../css/Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { addUser,checkUsername } from '../Api/Login-api'

function Signup() {
    const [name,setName]=useState('')
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    
    const handleSub=async(e)=>{
        e.preventDefault();
        const isUsername= await checkUsername(username);
        if(name&&username&&email&&password){
          if(!isUsername){
            addUser({name,username,email,password})
            setName('')
            setUsername('')
            setEmail('')
            setPassword('')
            navigate("/login")
          }
          else{
            alert(username+"  already exist");
          }
        }
        else{
          alert("Fill out all the details");
        }
    }

  return (
    <div className='signup-main'>
        <form onSubmit={handleSub} >
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username'/>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
            <button type='submit'>Submit</button>
            <h6>Already have a account <Link to={'/login'}>Login</Link></h6>
        </form>
        
    </div>
  )
}

export default Signup