import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import image from '../image1.jpg';
import styled from 'styled-components';

const Styles = styled.div`
.jumbo {
  background: url(${image}) no-repeat fixed bottom;
  background-size: cover;
  color: #efefef;
  height: 400px;
  position: relative;
  z-index: -2;
}
.overlay {
  background-color: #000;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}
`

const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
    <div className="overlay"></div>
    <Container>
      <h1>Title</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus vehicula iaculis. Sed maximus maximus diam, sit amet bibendum arcu consectetur id. Integer porta tincidunt enim. Nam vel iaculis tellus. Maecenas in tempor dolor, vel dignissim leo. Praesent tincidunt ultricies metus et pretium. Sed pretium consectetur fringilla. Donec finibus pharetra ullamcorper. Sed quis elementum risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce gravida felis eu mollis hendrerit. Mauris egestas id orci id molestie. Donec ut venenatis augue. Vestibulum sagittis eleifend tempus.
      </p>
    </Container>
    </Jumbo>
  </Styles>
)

export default Jumbotron;