import React,{createContext, useEffect, useState} from "react";
import axios from "axios";


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user,setUser]=useState([]);
    const URL="http://localhost:5000/users";

    const login= async(username,password)=>{
        try{
            const res = await axios.get(`${URL}?username=${username}&password=${password}`)
            console.log([username,password])
            if(res.data.length>0){
                const loggedInUser = res.data[0];
                setUser(loggedInUser);
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
        setUser(null);
        localStorage.removeItem('userId');
    };

return(
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
);
};