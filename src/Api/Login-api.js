import axios from "axios";

const URL="http://localhost:5000/users"


export const checkUsername= async (username)=>{
    const res = await axios.get(`${URL}?username=${username}`)
    return res.data.length>0;
}


export const addUser=async (user)=>{
    const res = await axios.post(URL,user)
    return res.data
}

export const checkUser= async (username,password)=>{
    const res = await axios.get(`${URL}?username=${username}&password=${password}`)
    return res.data;
}

export const getUserById=(id)=>{
    return axios.get(`${URL}/${id}`);
}

export const getAddressById=async(id)=>{
    const res= await axios.get(`${URL}/${id}`)
    return res.data.address;
}

export const addAddress=async(id,newAddress)=>{
    const currentAdress= await getAddressById(id)
    const res = await axios.patch(`${URL}/${id}`,{address : newAddress})
    return res.data.address
    // if(currentAdress.length>0){
    // const updatedAddress=currentAdress.push((item)=>...item,newAddress)
    // }else{

    // }
    // }
}