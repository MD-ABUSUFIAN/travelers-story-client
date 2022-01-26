import React from 'react';
import { Container } from 'react-bootstrap';
import './login.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
    };
    return (
        <div className='login-bg'>
            
           <div className='w-100 mx-auto pt-5' >
                {<form className='w-50 mx-auto mt-5 pt-5' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center fw-bolder text-danger'>LOGIN</h1>
                    <label className='fs-5 m-1 text-primary fw-bolder'>Email</label>
                    <input className='w-100 m-1 rounded py-3' {...register("email")} type="email" placeholder='Your Email' required />
                    <br/>
                    <label className='fs-5 m-1 text-primary fw-bolder'>Password</label>
                    <input className='w-100 m-1 rounded py-3' {...register("password")} type="password" placeholder='Your Password' required/>
                    <br/>
                    <input className='w-100 m-1 rounded py-3 btn btn-primary fw-bolder fs-5' type="submit" value="Login" />
                    <Link to ='/register' className='text-decoration-none'> <h4 className='pt-3 text-black fw-bolder'>New User? <span className='text-primary'>Please Register</span></h4></Link>
                </form>}
           </div>
        </div>
    );
};

export default Login;