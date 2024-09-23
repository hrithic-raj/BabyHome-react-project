import React, { useContext, useEffect, useState } from 'react'
import AdminNavbar from '../../../components/AdminNav'
import Sidebar from '../../../components/SideBar'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteProductById, getAllProducts } from '../../../Api/Admin-api';
import { getByCategory, getProducts } from '../../../Api/Product-api';
import EditProduct from './EditProduct';
import { AuthContext } from '../../../contexts/AuthContext';
import { toast } from 'react-toastify';

function AdminProduct() {
  const navigate=useNavigate();
  const [products,setProducts]=useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const {category} =useParams('category')
  const {isEdit,setIsEdit}=useContext(AuthContext)
  
  
  useEffect(()=>{
    if(category){
      getByCategory(category)
      .then(res=>{
        setProducts(res.data)
      })
    }
    else{
      getAllProducts()
      .then((res)=>{
        setProducts(res.data)
      })
    }
  },[category,isEdit])
  
  const handleDel=(id)=>{
    deleteProductById(id)
    .then(()=>{
      // console.log('Product Deleted')
      toast.success("Product Deleted")
      if (category) {
        getByCategory(category)
          .then((res) => {
            setProducts(res.data); 
          })
          .catch((error) => console.error('Error fetching category:', error));
      } else {
        getAllProducts()
          .then((res) => {
            setProducts(res.data); 
          })
          .catch((error) => console.error('Error fetching products:', error));
      }
    })
    .catch((error) => console.error('Error deleting product:', error));
  }

  useEffect(()=>{
      if(searchTerm.trim()===''){
        setFilteredProducts(products)
        return;
      }else{
        const searchProducts=products.filter(product=>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(searchProducts);
      }
  },[searchTerm,products])

  const handleEdit=(id)=>{
    setIsEdit(!isEdit)
    navigate(`/admin/products/editproduct/${id}`)
  }

  const handleProductClick=(productId)=>{
    navigate(`/admin/products/product/${productId}`)
  }

  return (
    <div className='relative bg-gray-100 h-full'>
        <AdminNavbar/>
        <div className='mt-[80px]'>
          <Sidebar/>
          <div className='lg:ms-20 flex flex-col items-center justify-center'>
          <div className='grid grid-cols-1 mt-4 md:grid-cols-4 lg:grid-cols-8 lg:grid-rows-3 md:gap-6 gap-y-3 order-1 justify-items-center'>
              <div className=' w-[330px] h-[200px] p-6 bg-white rounded-lg shadow-lg md:col-span-2 flex justify-between cursor-pointer' onClick={()=>navigate('/admin/products/addproduct')}>
                <div>
                  <div className="text-black text-3xl font-bold mt-2">Add Product</div>
                </div>
                <div>
                  <img src="https://cdn-icons-png.flaticon.com/512/10608/10608872.png" className='w-[150px] mt-3' alt="" />
                </div>
              </div>
              
              <div className='max-h-[550px] min-h-[400px] w-[330px] md:w-full p-2 bg-white rounded-lg shadow-lg md:col-span-4 md:row-span-4 lg:col-span-6 lg:row-span-3 order-3 lg:order-2'>
                
                <div className='flex flex-col items-center border-b-2'>
                    <span className='text-3xl bg-white text-center'>Product List</span>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="pl-10 pr-4 py-2 border-2 w-[300px] rounded-md focus:outline-none focus:ring-1 focus:ring-pink-100 mb-2"
                        onChange={(e)=>setSearchTerm(e.target.value)}
                    />
                    <div className='md:w-[600px] flex justify-between mb-2 flex-wrap'>
                      <button className='text-white bg-green-300 p-2 rounded-md w-[100px]' onClick={()=>navigate(`/admin/products/bathing`)}>Bathing</button>
                      <button className='text-white bg-blue-300 p-2 rounded-md  w-[100px]' onClick={()=>navigate(`/admin/products/toys`)}>Toys</button>
                      <button className='text-white bg-red-300 p-2 rounded-md  w-[100px]' onClick={()=>navigate(`/admin/products/cloths`)}>Cloths</button>
                      <button className='text-white bg-orange-300 p-2 rounded-md  w-[100px]' onClick={()=>navigate(`/admin/products/foods`)}>Foods</button>
                      <button className='text-white bg-pink-300 p-2 rounded-md  w-[100px]' onClick={()=>navigate(`/admin/products/diapers`)}>Diapers</button>
                    </div>
                </div>
                <div className='mt-3  flex flex-col md:w-full w-[300px] h-[300px] md:h-[380px] overflow-auto custom-scrollbar'>
                    <div className='mb-6 grid grid-cols-8 justify-items-center space-x-3 w-[700px] md:w-full'>
                        <span className='md:text-lg text-md font-semibold'>IMAGE</span>
                        <span className='md:text-lg text-md font-semibold'>NAME</span>
                        <span className='md:text-lg text-md font-semibold'>DESCRIPTION</span>
                        <span className='md:text-lg text-md font-semibold'>BEST SELLERS</span>
                        <span className='md:text-lg text-md font-semibold'>NEWLY ADDED</span>
                        <span className='md:text-lg text-md font-semibold'>CATEGORY</span>
                        <span className='md:text-lg text-md font-semibold'>EDIT</span>
                        <span className='md:text-lg text-md font-semibold'>DELETE</span>
                    </div>
                    <div className='h-[270px] md:h-[600px]'>
                      {filteredProducts.slice(0).reverse().map(product=>(
                        <div key={product.id} className='grid grid-cols-8 space-x-3 justify-items-center items-center w-[700px] md:w-full'>
                          <img className='w-[70px] cursor-pointer' onClick={()=>handleProductClick(product.id)} src={product.images[0]} alt="" />
                          <span onClick={()=>handleProductClick(product.id)} className='cursor-pointer'>{product.name}</span>
                          <span className='max-w-[100px] max-h-[50px] overflow-hidden'>{product.description}</span>
                          {product.bestseller?<img className='w-10' src="https://cdn-icons-png.flaticon.com/512/2851/2851399.png" alt="" />:<img className='w-10' src="" alt="" />}
                          {product.newlyadded?<img className='w-10' src="https://cdn-icons-png.flaticon.com/512/891/891509.png" alt="" />:<img className='w-10' src="" alt="" />}
                          <span>{product.category}</span>
                          <button className='text-white bg-blue-300 p-2 rounded-md ' onClick={()=>handleEdit(product.id)}>EDIT</button>
                          <button className='text-white bg-red-400 p-2 rounded-md' onClick={()=>handleDel(product.id)}>DELETE</button>
                        </div>
                      ))}
                    </div>
                </div>
              </div>
              
              <div className=' w-[330px] h-[200px] p-6 bg-white rounded-lg shadow-lg md:col-span-2 lg:row-span-2 flex justify-between order-2 lg-order-3'>
              <div>
                  <div className="text-green-600 font-bold">Total Products</div>
                  <div className="text-3xl font-semibold">{products.length}</div>
                </div>
                <div>
                <img src="https://cdn-icons-png.flaticon.com/512/10112/10112502.png" className='w-[130px] mt-4' alt="" />
                </div>
              </div>
          </div>
          </div>
        </div>
        {/* Edit modal */}
        <EditProduct/>
        
    </div>
  )
}

export default AdminProduct