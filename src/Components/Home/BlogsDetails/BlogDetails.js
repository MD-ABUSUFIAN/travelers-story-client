import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './BlogDetails.css';
import StarRating from 'react-bootstrap-star-rating';
import Header from '../Header/Header';

const BlogDetails = () => {
    const [blogs,setBlogs]=useState([])
    const {detailsId}=useParams();
    console.log(detailsId)
 
    useEffect(()=>{
         fetch('https://tranquil-lake-81267.herokuapp.com/allBlogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
      
    },[])
    const singleBlog=blogs?.filter((blog)=>blog?._id==detailsId)
    console.log(singleBlog)
    
    return (
        <div>
            <Header/>
            <Container>
            <div className='details-body'>
                <div>
                    <img className='w-100 h-50 rounded' src={singleBlog[0]?.img} alt="" />
                </div>
                <div className='p-5'>
                    <h1>Place: <span className='text-danger fw-bolder'>{singleBlog[0]?.title}</span></h1>
                    <h4>Location: <span className='text-primary fw-bolder'>{singleBlog[0]?.location}</span> </h4>
                    <h4>Traveler Name: <span className='text-primary fw-bolder'>{singleBlog[0]?.displayName}</span></h4>
                    <h4>Traveler Email: <span className='text-primary fw-bolder'> {singleBlog[0]?.email}</span></h4>
                    <h4>Traveler Number: <span className='text-primary fw-bolder'> {singleBlog[0]?.number} </span></h4>
                    <h4>Travel Date: <span className='text-primary fw-bolder'>{singleBlog[0]?.date}</span></h4>
                    <h4>Traveler Rating: <span className='text-danger fw-bolder'> {singleBlog[0]?.rating} </span></h4>
                    <h4>Total Cost:<span className='text-danger fw-bolder'> $ {singleBlog[0]?.cost}</span></h4>
                    
                    <p>Information : {singleBlog[0]?.description}</p>
                    
                </div>
            </div>
            
        </Container>
        </div>
    );
};

export default BlogDetails;