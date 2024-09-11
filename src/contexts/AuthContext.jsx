import React,{createContext, useEffect, useState} from "react";
import axios from "axios";
import { getCartById } from "../Api/Product-api";
import { getUserById } from "../Api/Login-api";


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user,setUser]=useState([]);
    const [cart,setCart]=useState([]);
    const URL="http://localhost:5000/users";
    const userId=localStorage.getItem('userId')

    const login= async(username,password)=>{
        try{
            const res = await axios.get(`${URL}?username=${username}&password=${password}`)
            console.log([username,password])
            if(res.data.length>0){
                const loggedInUser = res.data[0];
                localStorage.setItem('userId',loggedInUser.id);
                return loggedInUser;
            }else{
                throw new Error('invalid email or password');
            }
        }
        catch(err){
            console.error('Login error :',err);
        }
    };

    const logout =()=>{
        // setUser(null);
        localStorage.removeItem('userId');
    };
    // getUserById(userId)
    //   .then(res=>setUser(res.data))
    //   .catch(err=>console.error(err))
        useEffect(()=>{
            getCartById(userId)
                .then(res=>{
                    setCart(res)
                })
                .catch(err=>console.error(err))
        })
return(
    <AuthContext.Provider value={{user,login,logout,cart}}>
        {children}
    </AuthContext.Provider>
);
};