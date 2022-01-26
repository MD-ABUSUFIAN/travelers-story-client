import React, { useEffect, useState } from 'react';
import { Button, ButtonToolbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminHeader from '../AdminHeader/AdminHeader';
import './manageBlogs.css'


const ManageBlogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('https://boiling-hollows-19614.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
        
    },[])
    console.log(blogs)

    const handleDelete=(data)=>{
        console.log(data)

    }
    return (
        <div className='pb-5 '>
            <AdminHeader/>
        <Container>
        
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