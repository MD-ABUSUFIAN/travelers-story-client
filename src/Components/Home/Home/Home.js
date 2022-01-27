import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Header from '../../Home/Header/Header'

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Blogs/>
        </div>
    );
};

export default Home;