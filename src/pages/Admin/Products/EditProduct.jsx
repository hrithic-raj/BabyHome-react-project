import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import { addtoProduct, editProduct } from '../../../Api/Admin-api';
import { getProductById } from '../../../Api/Product-api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function EditProduct() {
    const {isEdit,setIsEdit}=useContext(AuthContext)
    const {productId}=useParams();
    const navigate=useNavigate();
    // console.log(productId)
    const [newProduct,setNewProduct]=useState({
        name:'',
        description:'',
        category:'',
        price:null,
        oldprice:null,
        stock:0,
        bestseller:false,
        newlyadded:false,
        addedDate:new Date().toISOString(),
        images:[]
      })
        const [errors, setErrors] = useState({});
        const [loading, setLoading] = useState(true);

        useEffect(()=>{
            const fetchProduct = async () => {
                try{
                    const res=await getProductById(productId)
                    setNewProduct(res.data)
                    setLoading(false)
                }
                catch (err) {
                    setErrors('Error fetching product details');
                    setLoading(false);
                }
            }
            fetchProduct();
        },[productId])
      
        const validateForm = () => {
          const newErrors = {};
          
          if (!newProduct.name) newErrors.name = 'Name is required';
          if (!newProduct.description) newErrors.description = 'Description is required';
          if (!newProduct.images[0]) newErrors.image = 'Main image is required';
          if (newProduct.images.length === 0 || newProduct.images.includes('')) newErrors.images = 'At least one image URL is required';
          
          if (typeof newProduct.price !== 'number' || newProduct.price <= 0) newErrors.price = 'Price must be a positive number';
          if (typeof newProduct.oldprice !== 'number' || newProduct.oldprice <= 0) newErrors.oldprice = 'Old price must be a positive number';
          if (newProduct.oldprice < newProduct.price) newErrors.oldprice = 'Oldprice must be greater than oru equal to price';
          if (typeof newProduct.stock !== 'number' || newProduct.stock <0) newErrors.stock = 'Stock must be a non-negative number';
      
          setErrors(newErrors);
          return Object.keys(newErrors).length === 0;
        };
      
      const handleChange =(e) => {
        const {name, value, type, checked} = e.target;
        if(type==='checkbox'){
          setNewProduct({ ...newProduct,[name]: checked});
        }
        else if(name==='price' || name==='oldprice' || name==='stock'){
          setNewProduct({ ...newProduct, [name]: Number(value) });
        }
        else{
          setNewProduct({ ...newProduct, [name]: value });
        }
        // console.log(newProduct)
      }
        const addNewImageField = () => {
            setNewProduct((prev) => ({
                ...prev,
                images: [...prev.images, '']
            }));
        };
        const removeImage=(index)=>{
            const updatedImages = newProduct.images.filter((img,i)=>i!==index);
            setNewProduct((prev) => ({
            ...prev,
            images: updatedImages,
            }));
        }
      
        const handleImageChange = (e, index) => {
          const updatedImages = newProduct.images.map((img,i)=>
            i===index ? e.target.value : img
          )
          setNewProduct((prev) => ({
            ...prev,
            images: updatedImages,
          }));
        //   console.log([...newProduct.images])
        };
      
      const handleSubmit=async(e)=>{
        e.preventDefault();
        if(validateForm()){
            try{
                await editProduct(productId, newProduct);
                setTimeout(() => {
                    setIsEdit(!isEdit);
                    toast.success("Product Updated")
                }, 1000);
                console.log('Product edited', newProduct);
            }
            catch (err) {
                console.error('Error editing product:', err);
            }
        }
        else{
          console.log('Validation error',errors)
        }
      }

      const handleCancel=(e)=>{
        e.preventDefault();
        setIsEdit(!isEdit)
        navigate('/admin/products')
        toast.success("Edit Canceled")
      }
      if (loading) return <div>Loading...</div>;
  return (
        <>
        {isEdit?(
        //   <div className='absolute top-[2%] left-[10%] w-[80%] min-h-[40rem] md:w-[80%] border'>
            <>
            <form onSubmit={handleSubmit} className="absolute top-[2%] left-[10%] w-[80%] max-h-[80%] md:w-[80%]  mx-auto p-6 bg-white shadow-md rounded-lg space-y-6 br overflow-auto custom-scrollbar">
              <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
              <h2 className="text-2xl font-bold text-gray-700 col-span-1 md:col-span-2 text-center">Edit Product</h2>
              <div>
                <label className="block text-gray-700">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>

              <div>
                <label className="block text-gray-700">Category</label>
                <select
                  name="category"
                  value={newProduct.category}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                >
                  <option value="bathing">Bathing</option>
                  <option value="toys">Toys</option>
                  <option value="diapers">Diapers</option>
                  <option value="foods">Foods</option>
                  <option value="cloths">Cloths</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={newProduct.description}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
                {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
              </div>


              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={newProduct.price}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  />
                  {errors.price && <span className="text-red-500 text-sm">{errors.price}</span>}
                </div>

                <div className="w-1/2">
                  <label className="block text-gray-700">Old Price</label>
                  <input
                    type="number"
                    name="oldprice"
                    value={newProduct.oldprice}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  />
                  {errors.oldprice && <span className="text-red-500 text-sm">{errors.oldprice}</span>}
                </div>
              </div>

              <div className=''>
                <label className="block text-gray-700">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={newProduct.stock}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
                {errors.stock && <span className="text-red-500 text-sm">{errors.stock}</span>}
              </div>

              <div className='flex flex-wrap justify-center space-x-5'>
                <div className="flex items-center space-x-4">
                  <label className="text-gray-700">Bestseller</label>
                  <input
                    type="checkbox"
                    name="bestseller"
                    checked={newProduct.bestseller}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <label className="text-gray-700">Newly Added</label>
                  <input
                    type="checkbox"
                    name="newlyadded"
                    checked={newProduct.newlyadded}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
              </div>

              {/* Main Image */}
                <div className="mb-4 col-span-1 md:col-span-2 md:place-self-center md:w-[50%]">
                  <label className="block text-gray-700 font-medium md-2 md:text-center text-start">Main Image URL</label>
                  <div className='flex items-center space-x-2'>
                    <div className='max-w-[100px] max-h-[100px] bg-slate-400 flex justify-center'>
                        {newProduct.images && newProduct.images[0]?(
                                <img className='w-[50px]' src={newProduct.images[0]} alt="" />
                        ):null}
                    </div>
                    <input
                        type="text"
                        value={newProduct.images[0] || ''}
                        onChange={(e) => handleImageChange(e, 0)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="Main Image URL"
                    />
                    {errors.image && <span className="text-red-500 text-sm">{errors.image}</span>}
                  </div>
                </div>

                {/* Additional Images */}
                <div className="mb-4 grid-cols-2 col-span-1 md:col-span-2 ">
                  <label className="block text-gray-700 font-medium mb-2 col-span-1 md:col-span-2 text-center">Additional Images</label>
                  {newProduct.images && newProduct.images.slice(1).map((img, index) => (
                    <div key={index} className="mb-2 flex items-center justify-center space-x-2">
                        <div className='max-w-[100px] max-h-[100px] flex justify-center'>
                        {img?(
                                <img className='w-[50px]' src={img} alt="" />
                            ):null}
                        </div>
                      <input
                        type="text"
                        value={img||''}
                        onChange={(e) => handleImageChange(e, index + 1)}
                        className="w-[50%] px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder={`Additional Image URL ${index + 1}`}
                      />
                      {errors.images && <span className="text-red-500 text-sm">{errors.images}</span>}
                      {/* <button>hello</button> */}
                      <button
                        type="button"
                        onClick={()=>removeImage(index+1)}
                        className="px-3 py-2 bg-red-400 text-white md:w-[15%] font-medium rounded-md hover:bg-red-500"
                        >
                        Remove Image
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={addNewImageField}
                  className="mb-4 px-4 py-2 bg-blue-500 text-white md:w-[30%] font-medium rounded-md hover:bg-blue-700 col-span-1 md:col-span-2 md:place-self-center"
                >
                  Add Another Image
                </button>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Submit
              </button>
              <button className='text-white bg-red-400 p-2 rounded-md' onClick={handleCancel}>cancel</button>
              </div>
            </form>
            </>
        ):(
          null
        )}
        </>
  )
}

export default EditProduct