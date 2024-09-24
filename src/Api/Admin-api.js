import axios from "axios";

const USERURL="http://localhost:5000/users"
const PRODUCTURL="http://localhost:5000/products";
const ORDERSURL="http://localhost:5000/totalorders"


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

export const addtoProduct=async(newProduct)=>{
    const res = await axios.post(PRODUCTURL,newProduct)
    return res.data
}

export const editProduct=(id,updatedProduct)=>{
    return axios.patch(`${PRODUCTURL}/${id}`,updatedProduct)
}

//Cart
export const getTotalOrders=async()=>{
    const res=await axios.get(ORDERSURL)
    return res.data;
}
export const getTotalSales= async ()=>{
    const res = await axios.get(`${ORDERSURL}/500`)
    return res.data.totalprice;
}