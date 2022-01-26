import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blogs.css'

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('https://boiling-hollows-19614.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
        
    },[])
    console.log(blogs)
    return (
        <Container>
            <h1>This is Blogs Page</h1>

           <div className='row  g-4'>
              {
                blogs?.map(blog=>
            <div key={blog?._id} className=' col-md-6 col-lg-6 col-sm-12 col-12 blogs-body rounded'>
                <div className='row gx-4 '>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                         <img className='img-fluid' src={blog?.img} alt="" />
                    </div>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12 '>
                         <h3>Place Name: {blog?.title}</h3>
                         <h3>Total Cost: {blog?.price}</h3>
                         <Link to={`/blog/${blog?._id}`}>
                           <Button>View Details</Button>
                         </Link>    
                     </div>
                </div>

          </div> 
                 )
              }

           </div>




            
        </Container>
    );
};

export default Blogs;