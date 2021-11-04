import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100  img-fluid" style={{height:"600px"}}
            src="https://www.themealdb.com//images//media//meals//ustsqw1468250014.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid" style={{height:"600px"}}
            src="https://www.themealdb.com//images//media//meals//wvqpwt1468339226.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  w-100 img-fluid" style={{height:"600px"}}
            src="https://www.themealdb.com//images//media//meals//wssvvs1511785879.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </>
    );
};

export default Banner;