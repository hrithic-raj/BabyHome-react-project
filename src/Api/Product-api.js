import axios from "axios"

const URL="http://localhost:5000/products";
const userURL="http://localhost:5000/users"
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

export const getCartById=async(id)=>{
    const res= await axios.get(`${userURL}/${id}`)
    return res.data.cart;
}

export const addToCart= async(userId,product,count)=>{
    const currentCart= await getCartById(userId)
    //check product already exist in the cart
    const price=product.price
    const totalprice=product.price*count
    const oldtotalprice=product.oldprice*count

    const productExist=currentCart.findIndex((item)=>item.id===product.id)
    let updatedCart;
    if(productExist>=0){
        //update count
        updatedCart=currentCart.map((item,index)=>
            index===productExist ? {...item, count: item.count+count , totalprice: price*(item.count+count), oldtotalprice : item.oldprice*(item.count+count)}:item
        )
    }
    else{
        //update cart
        updatedCart=[...currentCart,{...product, count , totalprice, oldtotalprice}];
    }


    //update the updatedCart to user
    // console.log(updatedCart);
    await axios.patch(`${userURL}/${userId}`,{cart: updatedCart});
    console.log("Product added/updated in cart successfully!");
    return await getCartById(userId);
}

export const deleteCartById=async(userId,productId)=>{
    const currentCart=await getCartById(userId);
    const updatedCart=currentCart.filter((item)=>item.id!==productId);
    await axios.patch(`${userURL}/${userId}`,{cart: updatedCart});
    console.log("Product deleted from cart successfully!");
    return await getCartById(userId);
}

export const increaseCount=async(userId,product)=>{
    const currentCart=await getCartById(userId);
    
    const updatedCart=currentCart.map((item)=>
        item.id===product.id ? {...item, count: item.count+1, totalprice: item.price*(item.count+1), oldtotalprice : item.oldprice*(item.count+1)}:item
    )
    // console.log(updatedCart);
    await axios.patch(`${userURL}/${userId}`,{cart: updatedCart});
    return updatedCart;
}

export const decreaseCount=async(userId,product)=>{
    const currentCart=await getCartById(userId);
    
    const updatedCart=currentCart.map((item)=>
        item.id===product.id ? {...item, count: (item.count===1)?1:item.count-1, totalprice: item.price*((item.count===1)?1:item.count-1), oldtotalprice : item.oldprice*((item.count===1)?1:item.count-1)}:item
    )
    // console.log(updatedCart)
    await axios.patch(`${userURL}/${userId}`,{cart: updatedCart});
    return updatedCart;
}
