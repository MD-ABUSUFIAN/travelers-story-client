import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminHeader from '../AdminHeader/AdminHeader';


const AllBlogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('https://boiling-hollows-19614.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
        
    },[])
    console.log(blogs)
    return (
        <div>
            <AdminHeader/>
        <Container>
            <h1>This is Blogs Page</h1>

           <div className='row  g-4 py-5 container'>
              {
                blogs?.map(blog=>
            <div key={blog?._id} className=' col-md-6 col-lg-6 col-sm-12 col-12 blogs-body rounded'>
                <div className='row  '>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                         <img className='img-fluid bolgs-image' src={blog?.img} alt="" />
                    </div>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12 '>
                         <h3>Place :<span className='text-danger py-2'>{blog?.title}</span> </h3>
                         <h3>Total Cost: {blog?.price}</h3>
                         <p>{blog?.description.slice(0,90)}</p>
                         
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

export default AllBlogs;