import React, { useEffect, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminHeader from '../AdminHeader/AdminHeader';


const AllBlogs = () => {
    const [blogs,setBlogs]=useState([]);
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://boiling-hollows-19614.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data)
            setIsLoading(false)

        }
            )
        
    },[])
    console.log(blogs)
    return (
        <div>
            <AdminHeader/>
        <Container>
            {
                isLoading &&  <Spinner animation="border" variant="primary" />
            }
            <marquee><h1 className='fs-1 fw-bolder text-primary pt-5'>ALL TRAVELER BLOGS STORY POST PAGE</h1></marquee>
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