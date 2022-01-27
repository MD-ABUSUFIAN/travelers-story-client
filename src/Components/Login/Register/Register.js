import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';


const Register = () => {
    const {registerUser}=useAuth();
    const navigate=useNavigate();
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        if(data?.password===data?.password2){
            console.log(data)
            registerUser(data?.email,data?.password,data?.displayName,navigate)
            reset()
        }
        else{
            alert('Please Type Currect Password')
        }
       
    };
    return (
        <div className='register-bg'>
            
           <div className='w-100 mx-auto pt-5' >
                {<form className='w-50 mx-auto mt-5 ' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center fw-bolder text-white'>REGISTER</h1>
                    <label className='fs-5 m-1 text-primary fw-bolder'>Your Name</label>
                    <input className='w-100 m-1 rounded py-3' {...register("displayName")} type="text" placeholder='Write Your User Name' required />
                    <br/>
                    <label className='fs-5 m-1 text-primary fw-bolder'>Email</label>
                    <input className='w-100 m-1 rounded py-3' {...register("email")} type="email" placeholder='Write Your Email' required />
                    <br/>
                    <label className='fs-5 m-1 text-primary fw-bolder'>Password</label>
                    <input className='w-100 m-1 rounded py-3' {...register("password")} type="password" placeholder='Write Your Password' required/>
                    <br/>
                    <label className='fs-5 m-1 text-primary fw-bolder'>Confirm Password</label>
                    <input className='w-100 m-1 rounded py-3' {...register("password2")} type="password" placeholder='Confirm Your Password' required/>
                    <br/>
                    <input className='w-100 m-1 rounded py-3 btn btn-primary fw-bolder fs-5' type="submit" value="Register" />
                    <Link to ='/login' className='text-decoration-none'> <h4 className='pt-3  text-black fw-bolder'>Already Register ? <span className='text-primary'>Please Login</span> </h4></Link>
                </form>}
           </div>
        </div>
    );
};

export default Register;