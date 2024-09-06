import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkUser } from '../Api/Login-api';
import '../css/Login.css'
function Login() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleSub=async (e)=>{
        e.preventDefault()
        const isValidUser= await checkUser(username,password);
        if(isValidUser){
            navigate("/home")
        }else{
            alert("Sign-up")
            navigate("/signup")
        }
    }

  return (
    <div className='login-main'>
    <form onSubmit={handleSub} >
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username'/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
        <button type='submit'>Submit</button>
    </form>
</div>
  )
}

export default Login