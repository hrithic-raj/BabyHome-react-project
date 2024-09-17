import React, { useEffect, useState, useContext} from 'react'
import dp from '../../Assets/Main/profile.png'
import MyNavbar from '../../components/MyNavbar'
import { addAddress, getAddressById, getUserById } from '../../Api/Login-api'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import MyFooter from '../../components/MyFooter'

function Profile() {
    const navigate=useNavigate();
    const [profilePic,setProfilePic]=useState(dp)
    const userId=localStorage.getItem('userId')
    const [user,setUser]=useState([]);
    const {logout}=useContext(AuthContext)
    const [address,setAddress]=useState([]);
    const [addressFlag,setAddressFlag]=useState(false);
    const [NewAddress,setNewAddress]=useState({
        pincode:'',
        housename:'',
        city:'',
        landmark:'',
        district :''
    });
    useEffect(()=>{
        getUserById(userId)
        .then(res=>setUser(res.data))
        .catch(err=>console.error(err))
        getAddressById(userId)
        .then(res=>setAddress(res))
        .catch(err=>console.error(err))
    },[])

    const handleLogout=()=>{
        logout()
        navigate('/home')
    }
    const handleChange=(e)=>{
        setNewAddress({...NewAddress, [e.target.name] : e.target.value});
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        addAddress(userId,NewAddress)
        .then(res=>{
            setAddress(res)
            setNewAddress({
                pincode:'',
                housename:'',
                city:'',
                landmark:'',
                district :'',
                state :'',
            })
            setAddressFlag(false)
        })
        .catch(err=>console.error(err))
        
    }
  return (
    <div>
        <MyNavbar/>
        <div className='mt-[150px] flex flex-wrap justify-center space-x-0 lg:space-x-5 space-y-5 lg:space-y-0 mb-[100px]'>
            <div className='flex lg:flex-col space-y-4 border p-4 shadow-lg lg:h-[600px] h-[340px] justify-evenly items-center lg:items-stretch flex-row lg:w-[320px] w-[800px]'>
                <img className='sm:w-[300px] sm:h-[300px] w-[100px] h-[100px]' src={profilePic} alt="" />
                {userId?(
                    <div className='flex flex-col space-y-2'>
                        <button className='bg-blue-500 rounded-lg p-2 text-white sticky top-0' onClick={()=>navigate('/profile')}>Account Details</button>
                        <button className='bg-blue-500 rounded-lg p-2 text-white sticky top-0' onClick={()=>navigate('/orders')}>Orders</button>
                        <button className='bg-blue-500 rounded-lg p-2 text-white sticky top-0' onClick={()=>navigate('/wishlist')}>Wishlist</button>
                        <button className='text-white bg-red-400 h-[40px] rounded sticky top-0' onClick={handleLogout}>LOGOUT</button>
                    </div>
                ):(
                    <button className='text-white bg-blue-400 h-[40px] rounded' onClick={()=>navigate('/login')}>LOG-IN</button>
                )
                }
                
            </div>
            <div className='w-[800px] flex flex-col shadow-lg p-4 border'>
                <label htmlFor="" className='text-2xl'>Name</label>
                <input className='text-xl p-3' type="text" value={user.name} placeholder='Name' disabled/>
                <label htmlFor="" className='text-2xl'>Username</label>   
                <input className='text-xl p-3' type="text" value={user.username} placeholder='Username' disabled/>
                <label htmlFor="" className='text-2xl'>Email</label>   
                <input className='text-xl p-3' type="text" value={user.email} placeholder='Username' disabled/>
                
                {userId?(
                    (!address)?(
                        (!addressFlag)?(
                            <button className='bg-blue-400 rounded p-2' onClick={()=>setAddressFlag(true)}>Add Address</button>
                        ):(
                            <div className='flex flex-col border p-2 mt-2'>
                                <span className='text-2xl text-center mb-2'>ADD NEW ADDRESS</span>
                                <form onSubmit={handleSubmit} className='space-y-5 flex flex-col items-center'>
                                    <div className='sm:space-x-3 space-x-0 flex flex-wrap justify-center'>
                                        <input className='text-xl border p-2' name='pincode' onChange={handleChange} type="text"  placeholder='Pincode' />
                                        <input className='text-xl border p-2' name='housename' onChange={handleChange} type="text"  placeholder='House Name'/>
                                    </div>
                                    <div className='sm:space-x-3 space-x-0 flex flex-wrap justify-center'>
                                        <input className='text-xl border p-2' name='city' onChange={handleChange} type="text"  placeholder='city'/>
                                        <input className='text-xl border p-2' name='landmark' onChange={handleChange} type="text"  placeholder='landmark'/>
                                    </div>
                                    <div className='sm:space-x-3 space-x-0 flex flex-wrap justify-center'>
                                        <input className='text-xl border p-2' name='district' onChange={handleChange} type="text"  placeholder='district'/>
                                        <input className='text-xl border p-2' name='state' onChange={handleChange} type="text"  placeholder='state'/>
                                    </div>
                                    <div className='sm:space-x-3 space-x-0 flex flex-wrap justify-center mb-10'>
                                        <button type='submit' className='bg-blue-500 rounded-lg p-2 text-white'>SAVE</button>
                                        <button className='bg-red-400 rounded-lg p-2 text-white' onClick={()=>setAddressFlag(false)}>CANCEL</button>
                                    </div>
                                </form>
                            </div>
                        )
                        
                    ):(
                        <div className='border flex flex-col mt-3'>
                                <span className='text-2xl text-center p-2'>ADDRESS</span>
                                <div className='sm:space-x-3 space-x-0 flex flex-wrap mb-3 justify-center items-center'>
                                    <label htmlFor="">Pincode</label>
                                    <input className='text-xl bg-transparent p-2' name='pincode' value={address.pincode} type="text"  placeholder='Pincode' disabled/>
                                    <label htmlFor="">house name</label>
                                    <input className='text-xl bg-transparent p-2' name='housename' value={address.housename} type="text"  placeholder='House Name' disabled/>
                                </div>
                                <div className='sm:space-x-3 space-x-0 flex flex-wrap mb-3 justify-center items-center'>
                                    <label htmlFor="">City</label>
                                    <input className='text-xl bg-transparent p-2' name='city' value={address.city} type="text"  placeholder='city'disabled/>
                                    <label htmlFor="">Lank mark</label>
                                    <input className='text-xl bg-transparent p-2' name='landmark' value={address.landmark} type="text"  placeholder='landmark'disabled/>
                                </div>
                                <div className='sm:space-x-3 space-x-0 flex flex-wrap mb-3 justify-center items-center'>
                                    <label htmlFor="">District</label>
                                    <input className='text-xl bg-transparent p-2' name='district' value={address.district} type="text"  placeholder='district'disabled/>
                                    <label htmlFor="">State</label>
                                    <input className='text-xl bg-transparent p-2' name='state' value={address.state} type="text"  placeholder='state'disabled/>
                                </div>
                                <div className='sm:space-x-3 space-x-0 flex flex-wrap justify-center mb-10 mt-2'>
                                    <button className='bg-blue-500 rounded-lg p-2 text-white' onClick={()=>{setAddressFlag(true);setAddress(null)}}>CHANGE</button>
                                </div>
                        </div>
                    )
                ):(
                    null
                )}
                
            </div>
            
        </div>
        <MyFooter/>
    </div>
  )
}

export default Profile
