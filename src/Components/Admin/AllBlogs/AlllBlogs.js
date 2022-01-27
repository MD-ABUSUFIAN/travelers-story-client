import React, { useEffect, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminHeader from '../AdminHeader/AdminHeader';
import swal from 'sweetalert';


const AllBlogs = () => {
    const [blogs,setBlogs]=useState([]);
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://tranquil-lake-81267.herokuapp.com/allBlogs')
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data)
        } ) 
        setIsLoading(false)
    },[isLoading])
    
    const handleDelete=(id)=>{
        console.log(id)
            fetch(`https://tranquil-lake-81267.herokuapp.com/manageBlogs/${id}`,{
            method:"DELETE",
            headers:{'content-type':'application/json'},
        }).then(res=>res.json())
        .then(data=>{
            if(data?.deletedCount){
                swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                      });
                    } else {
                      swal("Your imaginary file is safe!");
                    }
                  });
                  setIsLoading(true)
                  console.log(data)
                  }
             setIsLoading(false)
            }) }
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
                         <h4>Place :<span className='text-danger py-2'>{blog?.title}</span> </h4>
                         <h5>Total Cost: {blog?.price}</h5>
                         <p>Infomation: {blog?.description.slice(0,90)}</p>
                         <p>Status: <span className='text-primary fw-bolder'>{blog?.status}</span></p>
                         <button onClick={()=>handleDelete(blog?._id)} className='btn btn-danger m-2 fs-5'>Delete</button>
    
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