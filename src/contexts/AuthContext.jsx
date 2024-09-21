import React,{createContext, useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const navigate=useNavigate();
    const [user,setUser]=useState([]);
    const [cart,setCart]=useState([]);
    const URL="http://localhost:5000/users";
    const userId=localStorage.getItem('userId');
    const admin=localStorage.getItem('admin');
    
    const login= async(username,password)=>{
        let isAdmin=false
        
        try{
            if(username==="admin" && password==="123456"){
                isAdmin=true;
                localStorage.setItem("admin",username)
            }
            else{
                const res = await axios.get(`${URL}?username=${username}&password=${password}`)
                // console.log([username,password])
                
                if(res.data.length>0){
                    const [loggedInUser] = res.data;
                    if(loggedInUser.block===false){
                        localStorage.setItem('userId',loggedInUser.id);
                        setTimeout(()=>{
                            navigate('/home')
                            toast.success(`Welcome ${loggedInUser.name}`)
                        },1000)
                    }
                    else{
                        console.log(res.data)
                        let errors='User Blocked, Contact Admin';
                        return errors
                    }
                }else{
                    console.log(res.data)
                    let errors='invalid email or password';
                    return errors
                }
            }
            if(isAdmin){
                setTimeout(()=>{
                    navigate('/admin')
                    toast.success("Welcome Admin")
                },1000)
            }
            
        }
        catch(err){
            console.error('Login error :',err);
        }
    };

    const logout =()=>{
        // setUser(null);
        if(admin){
            localStorage.removeItem('admin');
            setTimeout(()=>{
                navigate('/home')
            },1000)
        }
        else if(userId){
            localStorage.removeItem('userId');
            setTimeout(()=>{
                navigate('/home')
            },1000)
        }
    };

    const [isEdit,setIsEdit]=useState(false);

return(
    <AuthContext.Provider value={{user,login,logout,cart,isEdit,setIsEdit}}>
        {children}
    </AuthContext.Provider>
);
};