import axios from "axios";

const USERURL="http://localhost:5000/users"
const PRODUCTURL="http://localhost:5000/products";

//users
export const getAllUsers=()=>{
    return axios.get(USERURL)
}

export const deleteUserById=(id)=>{
    return axios.delete(`${USERURL}/${id}`)
}


//products
export const getAllProducts=()=>{
    return axios.get(PRODUCTURL);
}