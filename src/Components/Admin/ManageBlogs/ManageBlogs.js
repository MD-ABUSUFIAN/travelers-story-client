import React, { useEffect, useState } from 'react';
import { Button, ButtonToolbar, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminHeader from '../AdminHeader/AdminHeader';
import './manageBlogs.css'


const ManageBlogs = () => {
    const [blogs,setBlogs]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://boiling-hollows-19614.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data)
            setIsLoading(false)
        })
        
    },[])
    console.log(blogs)

    const handleDelete=(data)=>{
        console.log(data)

    }
    return (
        <div className='pb-5 '>
            <AdminHeader/>
        <Container>
        <marquee><h1 className='fs-1 fw-bolder text-primary pt-5'>ALL TRAVELER BLOGS STORY POST MANAGE PAGE</h1></marquee>
        {
                isLoading &&  <Spinner animation="border" variant="primary" />
            }
        
           <div className='row  g-4 pt-5'>
              {
                blogs?.map(blog=>
            <div key={blog?._id} className=' col-md-4 col-lg-4 col-sm-12 col-12 blogs-body rounded'>
                <div className='row  '>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                         <img className='img-fluid bolgs-image' src={blog?.img} alt="" />
                    </div>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12 '>
                         <h4>Place :<span className='text-danger py-2'>{blog?.title}</span> </h4>
                         <h4>Total Cost: {blog?.price}</h4>
                         <button onClick={()=>handleDelete(blog?._id)} className='btn btn-danger m-2 fs-5'>Delete</button>
                         <button onClick={()=>handleDelete(blog?._id)} className='btn btn-primary fs-5'>Update</button>
                        
                     </div>
               
                </div>

          </div> 
                 )
              }

           </div>




            
        </Container>
        </div>
    );
};

export default ManageBlogs;