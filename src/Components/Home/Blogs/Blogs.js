import React, { useEffect, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Blogs.css'

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    const {user}=useAuth();
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        setIsLoading(true)
        fetch(`https://tranquil-lake-81267.herokuapp.com/blogs?status=Approved`)
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data)
            setIsLoading(false)
        })
        
    },[])
    console.log(blogs)
    return (
        <Container>
            {isLoading &&   <Spinner animation="border" variant="primary" />
}
           <marquee> <h1 className='fw-bolder py-5'>WELLCOME TRAVELERS STORY WEBSITE PLZ SHARE YOUR TRAVEL STORY <span className='text-primary fw-bolder'>{user?.email}</span></h1></marquee>

           <div className='row  g-4 pb-5'>
              {
                blogs?.map(blog=>
            <div key={blog?._id} className=' col-md-6 col-lg-6 col-sm-12 col-12 blogs-body rounded'>
                <div className='row gx-4 '>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                         <img className='img-fluid' src={blog?.img} alt="" />
                    </div>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12 '>
                         <h4>Place: <span className='text-danger pt-2'>{blog?.title}</span></h4>
                         <h5>Cost:<span className='text-primary fw-bolder'> ${blog?.cost}</span></h5>
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