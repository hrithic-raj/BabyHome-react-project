import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar'
import nextimg from '../Assets/Main/next.png'
import previmg from '../Assets/Main/prev.png'
import giftimg from '../Assets/Main/gift.png'
import loveimg from '../Assets/Main/love.png'
import priceimg from '../Assets/Main/price.png'
import serviceimg from '../Assets/Main/service.png'
import MyFooter from '../components/MyFooter'
import { getBestSeller, getNewlyAdded } from '../Api/Product-api'
function Home() {
    const navigate=useNavigate()
  const [imgIndex,setImgIndex]=useState(0);
  const [newlyAdded,setNewlyAdded]=useState([]);
  const [bestSeller,setBestSeller]=useState([]);
  
  const images=[
    "https://babymoo.in/cdn/shop/files/Monsoon-Sale_Web.jpg?v=1718776166&width=2000",
    "https://babymoo.in/cdn/shop/files/GiftSet_Caps_Web.jpg?v=1713866669&width=2000",
    "https://babymoo.in/cdn/shop/files/FOOTWEAR_WEB_2ad8dca1-799f-4c07-ab65-aa54cc9187bb.jpg?v=1720440498&width=2000"
  ]
  useEffect(()=>{
    const intervel=setInterval(()=>{
      nextSlide();
    },3000)
    return ()=>clearInterval(intervel);
  },[imgIndex])

  const nextSlide=()=>{
    setImgIndex((prev)=>prev=== images.length - 1 ? 0 : prev + 1);
  };

  const prevSlide=()=>{
    setImgIndex((prev)=>prev===0 ? images.length - 1 : prev - 1)
  }

  useEffect(()=>{
    getNewlyAdded()
    .then(res=>setNewlyAdded(res.data))
    .catch(err=>console.error(err))

    getBestSeller()
    .then(res=>setBestSeller(res.data))
    .catch(err=>console.error(err))
  },[])



    // Array of products (you can replace this with your dynamic data)
      const products = [
        { id: 1, name: "Product 1", image: "https://via.placeholder.com/150", price: "$100" },
        { id: 2, name: "Product 2", image: "https://via.placeholder.com/150", price: "$200" },
        { id: 3, name: "Product 3", image: "https://via.placeholder.com/150", price: "$300" },
        { id: 4, name: "Product 4", image: "https://via.placeholder.com/150", price: "$400" },
        { id: 5, name: "Product 5", image: "https://via.placeholder.com/150", price: "$500" },
        { id: 6, name: "Product 6", image: "https://via.placeholder.com/150", price: "$600" },
        { id: 7, name: "Product 7", image: "https://via.placeholder.com/150", price: "$700" },
        { id: 8, name: "Product 8", image: "https://via.placeholder.com/150", price: "$800" },
        { id: 9, name: "Product 9", image: "https://via.placeholder.com/150", price: "$900" },
        { id: 10, name: "Product 10", image: "https://via.placeholder.com/150", price: "$1000" },
        { id: 11, name: "Product 5", image: "https://via.placeholder.com/150", price: "$500" },
        { id: 12, name: "Product 6", image: "https://via.placeholder.com/150", price: "$600" },
        { id: 13, name: "Product 7", image: "https://via.placeholder.com/150", price: "$700" },
        { id: 14, name: "Product 8", image: "https://via.placeholder.com/150", price: "$800" },
        { id: 15, name: "Product 9", image: "https://via.placeholder.com/150", price: "$900" },
        { id: 16, name: "Product 10", image: "https://via.placeholder.com/150", price: "$1000" },
      ];
  return (
    <>
      <MyNavbar/>
      <div style={{marginTop:"130px"}} className=''>
        <div className='slider flex justify-center mt-36'>
        <div className='relative w-full max-w-4xl max-auto'>
          <div className='overflow-hidden relative'>
            <img 
              src={images[imgIndex]} 
              alt="" 
              className="w-full h-150 object-cover"
            />
            <button
              className='absolute top-1/2 left-0'
              onClick={prevSlide}
            >
              <img className='w-10 h-10' src={previmg} alt="" />
            </button>
            <button
              className='absolute top-1/2 right-0'
              onClick={nextSlide}
            >
              <img className='w-10 h-10' src={nextimg} alt="" />
            </button>
          </div>
        </div>
        </div>

        <div className='grid grid-cols-4 items-center w-full h-24 bg-red-200 mt-3 overflow-x-auto scrollbar-hide  sm:overflow-x-scroll custom-scrollbar'> 
          <div className='flex flex-col justify-center ms-10 items-center min-w-[150px] sm:ms-0 md:min-w-[100px] sm:w-[150px]'>
            <img className='' src={giftimg} alt="" />
            <span>WIDEST RANGE</span>
          </div>
          <div className='flex flex-col justify-center items-center min-w-[150px] md:min-w-[100px] sm:w-[150px] '>
            <img src={loveimg} alt="" />
            <span>HIGH QUALITY</span>
          </div>
          <div className='flex flex-col justify-center items-center min-w-[150px] md:min-w-[100px] sm:w-[150px] '>
            <img src={priceimg} alt="" />
            <span>BEST PRICES</span>
          </div>
          <div className='flex flex-col justify-center me-10 items-center min-w-[150px] sm:me-0 md:min-w-[100px] sm:w-[150px] '>
            <img src={serviceimg} alt="" />
            <span>CUSTOMER SERVICE</span>
          </div>
        </div>

    <section className='catagories p-4 mt-8'>
    <h2 className="text-3xl mt-10 font-bold mb-4 text-center">Categories</h2>
      <div className='flex flex-wrap justify-center my-10 space-x-10'>
        <div className='hover:cursor-pointer' onClick={()=>navigate('/store/cloths')}>
          <img src="https://babymoo.in/cdn/shop/files/AP.png?v=1681776025&width=200" alt="" />
        </div>
        <div className='hover:cursor-pointer' onClick={()=>navigate('/store/foods')}>
          <img src="https://babymoo.in/cdn/shop/files/FEEDING_bbf62231-d608-492b-b2da-d6b23eff8e8c.png?v=1681776169&width=200" alt="" />
        </div>
        <div className='hover:cursor-pointer' onClick={()=>navigate('/store/bathing')}>
          <img src="https://babymoo.in/cdn/shop/files/BATH.png?v=1681776238&width=200" alt="" />
        </div>
        <div className='hover:cursor-pointer' onClick={()=>navigate('/store/diapers')}>
          <img src="https://babymoo.in/cdn/shop/files/DIA_fa918afa-bd60-49f3-a91f-a6a44620f45d.png?v=1681776323&width=200" alt="" />
        </div>
        <div className='hover:cursor-pointer' onClick={()=>navigate('/store/toys')}>
          <img src="https://babymoo.in/cdn/shop/files/TOYS_f1c75327-a66e-49dc-9cf5-864104aec691.png?v=1681776401&width=200" alt="" />
        </div>
      </div>
    </section>

    <section style={{backgroundColor:"#f7f1f0"}} className="new-launches mt-8 p-4 mb-8">
      <h2 className="text-3xl mt-10 font-bold mb-4 text-center">New Launches</h2>

      <div  className="relative mt-16">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 space-x-5 ease-in-out mx-10 mb-10 overflow-x-auto custom-scrollbar"
          >
            {newlyAdded.map((product, idx) => (
              <div
                key={product.id}
                className="min-w-[23.7%] h-3/6 p-4  flex-shrink-0 text-center bg-white shadow-md rounded-lg hover:cursor-pointer"
                onClick={()=>navigate(`/store/product/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[250px] object-cover mb-2 rounded-md"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className='flex space-x-3 justify-center'>
                  <span className="text-red-600">Rs. {product.price}.00</span>
                  <span className="text-slate-900 line-through">Rs. {product.oldprice}.00</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>  


    <section  className="new-launches bg-red-100 mt-8 p-4 mb-8">
      <h2 className="text-3xl mt-10 font-bold mb-4 text-center">Best Seller</h2>

      <div  className="relative mt-16">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 space-x-5 ease-in-out mx-10 mb-10 overflow-x-auto custom-scrollbar"
          >
            {bestSeller.map((product, idx) => (
              <div
                key={product.id}
                className="min-w-[23.7%] h-3/6 p-4  flex-shrink-0 text-center bg-white shadow-md rounded-lg hover:cursor-pointer"
                onClick={()=>navigate(`/store/product/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[250px] object-cover mb-2 rounded-md"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className='flex space-x-3 justify-center'>
                  <span className="text-red-600">Rs. {product.price}.00</span>
                  <span className="text-slate-900 line-through">Rs. {product.oldprice}.00</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section> 

    <MyFooter/>

    </div>
    </>
  )
}

export default Home