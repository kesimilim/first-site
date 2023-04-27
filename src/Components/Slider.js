import React from "react";
import { Carousel } from "react-bootstrap";
import image from '../image1.jpg';

export function Slider() {
  return(
   <Carousel>
    <Carousel.Item style={{'height': '650px'}}>
      <img
      className="d-block w-100"
      src={image}
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
      src={image}
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
      src={image}
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