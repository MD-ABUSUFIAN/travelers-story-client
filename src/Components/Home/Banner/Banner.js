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
                <Carousel.Caption>
                <h3 className='fw-bolder text-primary'>THE ECO ISLAND OF CHUMBE</h3>
                <p className='text-black fw-bolder'>We would be lying if we said we didn’t have a favourite.
                 In fact, we still catch ourselves daydreaming about our time
                on Chumbe. If you’re looking for an escape from the norm – or
                from reality itself – book a night or four in a Tarzan-like
                beach bungalow, decorated with palm leaf curtains, bamboo walls
                and a secluded view of the beach.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://storytravelers.com/wp-content/uploads/zanzibar_7.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3 className='fw-bolder text-danger '>MICHANWI PINGWE</h3>
                <p className='fw-bolder text-warning'>We know the name is quite a mouthful, but just ask for ‘The Rock’ and someone will point you in the right direction. Upon arrival, you’ll either need to make the long, painful walk across metres of sharp coral, or you could wave to the locals and catch a lift on one of their handmade rafts from the beach to a floating restaurant just off shore.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://storytravelers.com/wp-content/uploads/zanzibar_11.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className='fw-bolder  '>KIZIMKAZI</h3>
                <p className='fw-bolder'>This beach comes alive before the sun comes up. The energy is tangible as locals set up their stalls, boats are brought in and visitors arrive. There’s something very special to see here that makes these early mornings worthwhile</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://storytravelers.com/wp-content/uploads/zanzibar_12.jpg"
                alt="Four slide"
                />
                <Carousel.Caption>
                <h3 className='fw-bolder  '>NUNGWI</h3>
                <p className='fw-bolder'>Lined with festive beach bars, restaurants and clubs, Nungwi is where the party is at! it’s the most popular tourist hub on the island, filled with hundreds of travellers from all corners of the globe.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://storytravelers.com/wp-content/uploads/zanzibar_10.jpg"
                alt="Five slide"
                />
                <Carousel.Caption>
                <h3 className='fw-bolder text-primary '>MBWENI RUINS</h3>
                <p className='fw-bolder text-black'>Finally, if you’ve been dreaming about the idyllic island experience of lying on a cushioned beach chair, under a shaded bamboo umbrella, tanning and reading a book while listening to the lapping sound of the ocean, head West.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://storytravelers.com/wp-content/uploads/zanzibar_1.jpg"
                alt="Six slide"
                />
                <Carousel.Caption>
                <h3 className='fw-bolder  '>NUNGWI</h3>
                <p className='fw-bolder'>Lined with festive beach bars, restaurants and clubs, Nungwi is where the party is at! it’s the most popular tourist hub on the island, filled with hundreds of travellers from all corners of the globe.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>}
        </div>
    );
};

export default Banner;