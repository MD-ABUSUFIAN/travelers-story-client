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
        fetch('https://boiling-hollows-19614.herokuapp.com/services')
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
                    <h3>Place Name: {singleBlog[0]?.title}</h3>
                    <h3>Total Cost: {singleBlog[0]?.price}</h3>
                    <p>Information : {singleBlog[0]?.description}</p>
                    
                </div>
            </div>
            
        </Container>
        </div>
    );
};

export default BlogDetails;