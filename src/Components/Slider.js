import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from '../slider_image1.jpeg';
import image2 from '../slider_image2.jpg';
import image3 from '../slider_image4.jpg';

export function Slider() {
  return(
   <Carousel>
    <Carousel.Item style={{'height': '650px'}}>
      <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide</h3>
        <p>This is first slide^^</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{'height': '650px'}}>
      <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide</h3>
        <p>This is second slide^^</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{'height': '650px'}}>
      <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide</h3>
        <p>This is third slide^^</p>
      </Carousel.Caption>
    </Carousel.Item>
   </Carousel>
  );
}