import React, { useContext, useState ,useEffect} from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { checkUser } from '../../Api/Login-api';
import AuthNav from '../../components/AuthNav';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../contexts/AuthContext';
const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function Login() {
    const navigate=useNavigate();
    const [errorMsg,setErrorMsg]=useState('')
    const {login}=useContext(AuthContext);
    const userId=localStorage.getItem('userId')
    const formik=useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values)=>{
            const loggedInUser =await login(values.username,values.password);
            if(loggedInUser){
                navigate('/home')
            }
            else(
                setErrorMsg("Invalid username or password")
            )
        }
    })
    useEffect(()=>{
        if(userId){
          navigate('/home')
        }
      },[userId])
  return (
    <div className='login-main'>
        <AuthNav/>
        <div className='mt-[130px] flex items-center justify-center'>
            <div className='border w-[500px] h-[550px] flex flex-col items-center justify-center space-y-2 p-5'>
                <span className='text-3xl font-bold mb-10'>LOGIN</span>
            <form className='login-form w-[500px] flex flex-col items-center space-y-5' onSubmit={formik.handleSubmit} >
                {errorMsg && (
                    <div className="text-red-500">{errorMsg}</div>
                )}
                <label htmlFor="username" className='w-[300px] text text-left'>Username</label>
                <input  className='w-[300px] h-[35px] rounded ps-5 bg-blue-50 border-2 border-blue-200' name='username' type="text" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your Username'/>
                {formik.touched.username && formik.errors.username ? (
                    <div className="text-red-500">{formik.errors.username}</div>
                ) : null}
                <label htmlFor="password" className='w-[300px] text-left'>Password</label>
                <input  className='w-[300px] h-[35px] rounded ps-5 bg-blue-50 border-2 border-blue-200' name='password' type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter Your Password'/>
                {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
                <button type='submit' className='bg-blue-400 text-white font-bold w-[300px] h-[35px] rounded'>Submit</button>
                <h6>New to BabyHome ? <NavLink className='text-blue-400 mt-5' to={'/signup'}>Sign up</NavLink></h6>
            </form>
            </div>
        </div>
</div>
  )
}

export default Login