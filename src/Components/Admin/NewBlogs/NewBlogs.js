import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminHeader from '../AdminHeader/AdminHeader';
import swal from 'sweetalert';



const AddTravelExperience = () => {
    const { register, handleSubmit,reset } = useForm();
    const {loginUser,user}=useAuth();
    const onSubmit = data => {
        data.status="Approved";
           fetch('https://tranquil-lake-81267.herokuapp.com/newBlog',{
           method:"POST",
           headers:{'content-type':'application/json'},
           body:JSON.stringify(data)
       }).then(res=>res.json())
       .then(data=>{
           if(data?.insertedId){
            swal("Successfully", "Thank You Successfully Added", "success");
            console.log(data)
             reset()
           }
       })
        console.log(data)
       
    };
    
    return (
        <div className='travel-bg'>
          
           <AdminHeader/>
           <div className='w-100 mx-auto pb-5' >
                {<form className='w-50 mx-auto  pt-5' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center fw-bolder text-danger'>NEW TRAVEL BLOG POST</h1>
                   
                    <input className='w-100 m-1 rounded py-3' {...register("email",{required:true})} type="email" defaultValue={user?.email} />
                    <input className='w-100 m-1 rounded py-3' {...register("displayName")} type="text" required placeholder='Write Your Name'  />
                    <input className='w-100 m-1 rounded py-3' {...register("number")} type="text" required placeholder='Write Your Number'  />
                    <input className='w-100 m-1 rounded py-3' {...register("title")} type="text" required placeholder='Write Travel Place Name'  />
                    <input className='w-100 m-1 rounded py-3' {...register("img")} type="text" required placeholder='Write Travel Place Image Url'  />
                    <input className='w-100 m-1 rounded py-3' {...register("location")} type="text" required placeholder='Write Travel Place Location'  />
                    <input className='w-100 m-1 rounded py-3' {...register("cost")} type="number" required placeholder='Write Travel Total Cost'  />
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