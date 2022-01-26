import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Header from '../../Home/Header/Header'

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <h1>This is Home Page</h1>
            <Blogs/>
        </div>
    );
};

export default Home;