import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Jumbotron from './Components/Jumbotron';
import { Slider } from './Components/Slider';
import image from './image1.jpg';

export const Home = () => (
<>
<Slider />
<Row style={{padding: '2rem', paddingBottom: '2rem', paddingLeft: '6rem', backgroundColor: '#212529'}}>
    <Col>
    <Card  style={{width: '18rem'}}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>Card</Card.Title>
        <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>Card</Card.Title>
        <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>Card</Card.Title>
        <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
    </Col>
</Row>
<Jumbotron/>
<Container style={{ marginBottom: '30px' }}>
    <Row>
        <Col md={7}>
            <img src={image} height={400} width={500}/>
        </Col>
        <Col md={5}>
          <h2>Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus vehicula iaculis. Sed maximus maximus diam, sit amet bibendum arcu consectetur id. Integer porta tincidunt enim. Nam vel iaculis tellus. Maecenas in tempor dolor, vel dignissim leo. Praesent tincidunt ultricies metus et pretium. Sed pretium consectetur fringilla. Donec finibus pharetra ullamcorper. Sed quis elementum risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce gravida felis eu mollis hendrerit. Mauris egestas id orci id molestie. Donec ut venenatis augue. Vestibulum sagittis eleifend tempus.
          </p>
        </Col>
    </Row>
</Container>
<Container >
</Container>
</>  
)