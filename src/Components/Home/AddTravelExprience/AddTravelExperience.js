import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../Header/Header';
import './addTravelExperience.css'


const AddTravelExperience = () => {
    const { register, handleSubmit,reset } = useForm();
    const {loginUser,user}=useAuth();
    const onSubmit = data => {
        data.status=false;
        console.log(data)
        reset()
       
    };
    
    return (
        <div className='travel-bg'>
            <Header/>
           <div className='w-100 mx-auto mb-5 pb-5' >
                {<form className='w-50 mx-auto mt-5 pt-5' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center fw-bolder text-danger'>Share Travel Experience Form</h1>
                   
                    <input className='w-100 m-1 rounded py-3' {...register("email",{required:true})} type="email" value={user?.email} />
                    <input className='w-100 m-1 rounded py-3' {...register("displayName")} type="text" required placeholder='Write Your Name'  />
                    <input className='w-100 m-1 rounded py-3' {...register("number")} type="text" required placeholder='Write Your Number'  />
                    <input className='w-100 m-1 rounded py-3' {...register("title")} type="text" required placeholder='Write Travel Place Name'  />
                    <input className='w-100 m-1 rounded py-3' {...register("img")} type="text" required placeholder='Write Travel Place Image Url'  />
                    <input className='w-100 m-1 rounded py-3' {...register("location")} type="text" required placeholder='Write Travel Place Location'  />
                    <input className='w-100 m-1 rounded py-3' {...register("text")} type="number" required placeholder='Write Travel Total Cost'  />
                    <input className='w-100 m-1 rounded py-3' {...register("description")} type="text" required placeholder='Write Travel Place Description'  />
                    <br/>
                    <input className='w-100 m-1 rounded py-3' {...register("date")} type="date" placeholder='Write Your Travel Date' required />
                    <br/>
                    <input className='w-100 m-1 rounded py-3' {...register("rating", { min: 1, max: 5 })} type="number" placeholder='Write Your Review Rating Number' required />
                    <br/>
                    <input className='w-100 m-1 rounded py-3 btn btn-primary fw-bolder fs-5' type="submit" value="POST" />
                    
                </form>}
           </div>
        </div>
    );
};

export default AddTravelExperience;