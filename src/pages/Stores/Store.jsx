import React,{useState,useEffect} from 'react'
import MyNavbar from '../../components/MyNavbar'
import {useNavigate, useParams} from 'react-router-dom'
import { getProducts ,getByCategory} from '../../Api/Product-api'
function Store() {
  const navigate= useNavigate()
  const [products,setProducts]=useState([])
  const {category}=useParams()
  useEffect(() => {
      if(category){
        getByCategory(category)
        .then(res=>{
          setProducts(res.data)
        })
        .catch(err=>console.error("Error while fetching products", err))
      }else{
        getProducts()
        .then(res=>setProducts(res.data))
        .catch(err=>console.error("Error while fetching products", err))
      }
      
  }, []);
 
  if (!products) {
    return <div>Loading...</div>;
  }

  
  const handleProduct=(productId)=>{
    navigate(`/store/product/${productId}`)
  }
  return (
    <div>
      <MyNavbar/>
      <div className='mt-[150px] mb-[100px] flex-col items-center'>
      <div className='flex justify-center'>
        <img 
          className='w-[1200px] h-[400px]' 
          src="https://babymoo.in/cdn/shop/files/Baby_Moo_New_Collection_Web_9e8176f1-a956-452f-b27a-a7abcae0ffd1.jpg?v=1674889434&width=1100" 
          alt="" 
        />
      </div>
      <div className='flex justify-center flex-wrap mx-20 mt-10 gap-10'>
          {products.map(product=>(
            <div key={product.id} className='w-[300px] h-[350px] flex flex-col items-center shadow-md border space-y-3 hover:cursor-pointer' onClick={()=>handleProduct(product.id)}>
            <img className='w-[270px] h-[250px] mt-3' src={product.image} alt="Product Image" />
            <div className='flex flex-col'>
            <span className='max-w-[270px]'>{product.name}</span>
            <div className='flex justify-center space-x-2'>
              <span className='text-red-500'>Rs.{product.price}.00</span>
              <span className='line-through'>Rs.{product.oldprice}.00</span>
            </div>
            </div>
          </div>
          ))}
          
          
      </div>
      </div>
    </div>
  )
}

export default Store