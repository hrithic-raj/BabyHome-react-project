import React,{useState,useEffect, useContext} from 'react'
import { getProductById } from '../../../Api/Product-api';
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from '../../../components/AdminNav';
import Sidebar from '../../../components/SideBar';
import { AuthContext } from '../../../contexts/AuthContext';
import { deleteProductById } from '../../../Api/Admin-api';

function ProductView() {
  const [product, setProduct] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const navigate=useNavigate();
  const {productId}=useParams()
  const {isEdit,setIsEdit}=useContext(AuthContext)

  useEffect(() => {
    getProductById(productId)
      .then(res => {
        setProduct(res.data);
        setSelectedImage(res.data.images[0]);
        setSelectedImages(res.data.images)
      })
      .catch(err=> console.error('Error fetching product data', err));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  const handleEdit=(id)=>{
    setIsEdit(!isEdit)
    setTimeout(() => {
        navigate(`/admin/products/editproduct/${id}`)
    }, 1000);
  }
  const handleDel=(id)=>{
    deleteProductById(id)
    .then(()=>{
        setTimeout(() => {
            navigate(`/admin/products`)
        }, 1000);
    })
  }
  return (
    <div className='relative h-full'>
      <AdminNavbar/>
      <div className='mt-[80px]'>
        <Sidebar/>
        <div className='mt-[150px] mb-[100px]'>
          <div className='grid grid-cols-1 space-y-10 xl:space-y-0 xl:grid-cols-2 h-max'>
            <div className='flex xl:ms-20 space-x-30 ms-5 w-[700px]'>
            <div className='order-2'>
              <div className='relative'>
                <img className='w-[500px] h-[500px]' src={selectedImage} alt="" />
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
              <button className='text-xl mt-10 w-[300px] bg-sky-400 h-10 rounded' onClick={()=>handleEdit(product.id)}>EDIT</button>
              <button className='text-xl mt-3 w-[300px] bg-red-400 h-10 rounded' onClick={()=>handleDel(product.id)}>DELETE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView