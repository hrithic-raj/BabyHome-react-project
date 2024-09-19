import React,{useState,useEffect} from 'react'
import MyNavbar from '../../components/MyNavbar'
import {useNavigate, useParams} from 'react-router-dom'
import { getProducts ,getByCategory} from '../../Api/Product-api'
import MyFooter from '../../components/MyFooter'
function Store() {
  const navigate= useNavigate()
  const [products,setProducts]=useState([])
  const {category}=useParams()
  const userId =localStorage.getItem('userId')
  const admin =localStorage.getItem('admin')
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
        <div className='flex justify-center space-x-3 '>
            <img 
              className='w-[43%] h-[300px] rounded-lg' 
              src="https://allaboutmeelc.com/wp-content/uploads/2022/07/infant1-800x533.jpg" 
              alt="" 
            />
            <img 
              className='w-[43%] h-[300px] rounded-lg' 
              src="https://allaboutmeelc.com/wp-content/uploads/2022/07/infants4.jpg" 
              alt="" 
            />
          </div>
          <div className='flex justify-center flex-wrap mx-20 mt-10 gap-10'>
              {products.map(product=>(
                <div key={product.id} className='w-[300px] h-[350px] flex flex-col items-center shadow-md border space-y-3 hover:cursor-pointer  hover:transform hover:scale-105  transition-all duration-500 ease-in-out' onClick={()=>handleProduct(product.id)}>
                <img className='w-[270px] h-[250px] mt-3' src={product.images[0]} alt="Product Image" />
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
      <MyFooter/>
    </div>
  )
}

export default Store