import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
         
        {<Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://storytravelers.com/wp-content/uploads/zanzibar_5.jpg"
                alt="First slide"
                />
                
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://storytravelers.com/wp-content/uploads/zanzibar_7.jpg"
                alt="Second slide"
                />
                
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://storytravelers.com/wp-content/uploads/zanzibar_11.jpg"
                alt="Third slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://storytravelers.com/wp-content/uploads/zanzibar_12.jpg"
                alt="Four slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://storytravelers.com/wp-content/uploads/zanzibar_10.jpg"
                alt="Five slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://storytravelers.com/wp-content/uploads/zanzibar_1.jpg"
                alt="Six slide"
                />
                
            </Carousel.Item>
        </Carousel>}
        </div>
    );
};

export default Banner;