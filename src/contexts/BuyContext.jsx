// import React,{createContext, useEffect, useState} from "react";
// import axios from "axios";
// import { getCartById } from "../Api/Product-api";

// export const BuyContext = createContext();

// export const BuyProvider=({children})=>{
//     const userId=localStorage.getItem('userId');
//     const [cart,setCart]=useState([]);
//     const [total,setTotal]=useState(0);
//     const [oldTotal,setOldTotal]=useState(0);
    
//     useEffect(()=>{
//         setTotal(cart.reduce((acc,value)=>acc+value.totalprice,0))
//         setOldTotal(cart.reduce((acc,value)=>acc+value.oldtotalprice,0))
//     })
//     useEffect(()=>{
//         getCartById(userId)
//         .then(res=>setCart(res))
//         .catch(err=>console.error(err))
//     },[userId])

//     return(
//         <BuyContext.Provider value={{cart,setCart,total,setTotal,oldTotal,setOldTotal}}>
//             {children}
//         </BuyContext.Provider>
//     );
// }