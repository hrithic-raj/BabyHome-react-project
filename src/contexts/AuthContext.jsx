import React,{createContext, useEffect, useState} from "react";
import axios from "axios";
import { getCartById } from "../Api/Product-api";
import { getUserById } from "../Api/Login-api";
import { useNavigate } from "react-router-dom";


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
                    localStorage.setItem('userId',loggedInUser.id);
                    setTimeout(()=>{
                        navigate('/home')
                    },1000)
                }else{
                    let errors='invalid email or password';
                    return errors
                }
            }
            if(isAdmin){
                setTimeout(()=>{
                    navigate('/admin')
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
    
        // useEffect(()=>{
            // if(userId){
            //     getUserById(userId)
            //     .then(res=>{
            //         setUser(res.data)
            //         console.log(user,"user")
            //         }
            //         )
            //     .catch(err=>console.error(err))
            // }
            // if(cart){
                // getCartById(userId)
                // .then(res=>{
                //     setCart(res)
                //     console.log(cart,"cart")
                // })
                // .catch(err=>console.error(err))
            // }
            
        // })

        //  getCartById(userId)
        //     .then(res=>{
        //         setCart(res)
        //         // console.log(cart,"cart")
        //     })
        //     .catch(err=>console.error(err))
return(
    <AuthContext.Provider value={{user,login,logout,cart}}>
        {children}
    </AuthContext.Provider>
);
};