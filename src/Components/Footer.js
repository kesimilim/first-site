import React from "react";
import { Container } from "react-bootstrap";

export const Footer = () => (
   <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
       <Container fluid style={{ 
             display: 'flex', 
             justifyContent: 'center', 
             padding: '10px'
          }}>
           <p>© 2023 kesimilim</p>
       </Container>
   </Container>
)