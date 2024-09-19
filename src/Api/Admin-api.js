import axios from "axios";

const USERURL="http://localhost:5000/users"
const PRODUCTURL="http://localhost:5000/products";
const ORDERSURL="http://localhost:5000/totalorders"
const SALESURL="http://localhost:5000/totalsales"


//users
export const getAllUsers=()=>{
    return axios.get(USERURL)
}

export const deleteUserById=(id)=>{
    return axios.delete(`${USERURL}/${id}`)
}

export const blockUserById=(id,status)=>{
    return axios.patch(`${USERURL}/${id}`,{block:status})
}

//products
export const getAllProducts=()=>{
    return axios.get(PRODUCTURL);
}

export const deleteProductById=(id)=>{
    return axios.delete(`${PRODUCTURL}/${id}`)
}

export const getTotalOrders=async()=>{
    const res=await axios.get(ORDERSURL)
    return res.data;
}
export const getTotalSales=async()=>{
    const res=await axios.get(SALESURL)
    return res.data;
}
export const addtoProduct=async(newProduct)=>{
    const res = await axios.post(PRODUCTURL,newProduct)
    return res.data
}