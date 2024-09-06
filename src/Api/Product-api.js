import axios from "axios"

const URL="http://localhost:5000/products";

// export const getProducts= async ()=>{
//     return await axios.get(URL);
// }
export const getProducts=()=>{
    return axios.get(URL);
}

export const getProductById=(id)=>{
    return axios.get(`${URL}/${id}`);
}
export const getByCategory=(category)=>{
    return axios.get(`${URL}?category=${category}`)
}
export const getNewlyAdded=()=>{
    return axios.get(`${URL}?newlyadded=true`);
}

export const getBestSeller=()=>{
    return axios.get(`${URL}?bestseller=true`);
}

export const checkUsername= async (username)=>{
    const res = await axios.get(`${URL}?username=${username}`)
    return res.data.length>0;
}
