import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <h1>This is Home Page</h1>
            <Blogs/>
        </div>
    );
};

export default Home;