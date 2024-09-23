import React,{useState,useEffect} from 'react'
import MyNavbar from '../../components/MyNavbar'
import { addToCart, getProductById } from '../../Api/Product-api';
import { useNavigate, useParams } from 'react-router-dom';
import MyFooter from '../../components/MyFooter';
import { toast } from 'react-toastify';

function Product() {
  const [product, setProduct] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [quntity, setQuntity] = useState(1);
  const navigate=useNavigate();
  const userId=localStorage.getItem('userId')
  const {productId}=useParams()
  const [cartAddAlert,setCartAddAlert]=useState(false)

  useEffect(() => {
    getProductById(productId)
      .then(res => {
        setProduct(res.data);
        setSelectedImage(res.data.images[0]);
        setSelectedImages(res.data.images)
      })
      .catch(err=> console.error('Error fetching product data', err));
  }, []);

  if (!product) return <div>Loading...</div>;


  const handleCart=()=>{
    if(userId){
      addToCart(userId,product,quntity)
      .then(res=>{
        toast.success("Cart Updated",{position:'bottom-left'})
        setCartAddAlert(true)
        setTimeout(() => {
          setCartAddAlert(false)
        }, 3000);
      })
      .catch(err=>console.error(err))
    }
    else{
      navigate('/login')
    }
    
  }
  const handleWishlist=(e)=>{
    console.log(e.target.checked)
  }
  return (
    <div>
      <MyNavbar cartAddAlert={cartAddAlert}/>
      <div className='mt-[150px] mb-[100px]'>
        <div className='grid grid-cols-1 space-y-10 xl:space-y-0 xl:grid-cols-2 h-max'>
          <div className='flex xl:ms-20 space-x-30 ms-5 w-[700px]'>
          <div className='order-2'>
            <div className='relative'>
              <img className='w-[500px] h-[500px]' src={selectedImage} alt="" />
              <div className='absolute top-0 left-6'>
              <input id="heart" type="checkbox" onChange={handleWishlist}/>
              <label htmlFor="heart">❤</label>
              </div>
            </div>
            </div>
          <div className='order-1 grid grid-flow-row w-[100px] h-[500px] space-y-4 overflow-scroll custom-scrollbar 2xl:me-10 '>
            {selectedImages.map((img,index)=>(
              <button key={index} onClick={()=>setSelectedImage(img)} className='flex justify-center items-center w-24 h-24 focus:border-2'><img className='w-20 h-20' src={img} alt="" /></button>
            ))}
            </div>
            
          </div>
          <div className='flex flex-col items-start ms-10'>
            <span className='text-2xl'>Baby Home</span><br />
            <span className='text-4xl max-w-[400px]'>{product.name}</span><br />
            <hr/>
            <span className='text-1xl max-w-[500px] xl:max-w-[300px]'>{product.description}</span>
            <div className='flex space-x-3 mt-10'>
              <span className='text-gray-500'>MRP : </span>
              <span className='text-gray-500 line-through'> ₹{product.oldprice}.00</span>
              <span className=' text-green-500'>Save ₹{product.oldprice-product.price}.00</span>
            </div>  
              <span className='text-3xl text-black mt-2 mb-2'>₹ {product.price}.00</span>
              <div>
                {product.stock===0?(
                  <span className='bg-gray-400 text-white p-0.5 rounded'>SOLD OUT</span>
                ):(
                  (product.stock<10)?(
                    <span className='bg-red-500 text-white p-0.5 rounded'>Only {product.stock} left</span>
                  ):(
                    <span className='bg-lime-300 text-white p-0.5 rounded'>{product.stock} STOCK AVAILABLE</span>
                  )
                )}
              </div>
              <div className='mt-5'>
                {product.price>499?(
                  <span className='text-green-500 rounded'>Eligible For Free Delivery</span>
                ):(
                  <span className='text-red-300 rounded'>Only product over than 499 eligible for free delivery</span>
                )}
              </div>
            <div className='mt-10 border border-gray-500 flex justify-center space-x-4 items-center h-10 rounded'>
              <button onClick={()=>setQuntity(prev=>prev===1?1:prev-1)} className='text-2xl rounded w-10 h-10'>-</button>
              <span className='text-2xl'>{quntity}</span>
              <button onClick={()=>setQuntity(prev=>prev+1)} className='text-2xl rounded w-10 h-10'>+</button>
            </div>
            <button className='text-xl mt-10 w-[300px] bg-pink-300 h-10 rounded' onClick={handleCart}>ADD TO CART</button>
            {/* <button className='text-xl mt-3 w-[300px] bg-red-200 h-10 rounded'>BUY NOW</button> */}
          </div>
        </div>
      </div>
      <MyFooter/>
    </div>
  )
}

export default Product