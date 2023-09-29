import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import { Col, Row,Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Logo from '../Assets/2.jpg';
import ProfilePic from "../Assets/john-doe-image.png";


const Home = () => {
  
    const [photos, setCards] = useState([]);
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos'; // Replace with your API endpoint
  
    useEffect(() => {
      // Fetch data when the component mounts
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setCards(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
  
  return (
  <>
  
      <Navbar />
      
     
      <h1 className="text-center mt-4 text-danger">Get images from Api</h1>
      <Container>
        <Row>
            {photos.map((photo)=>(
                <Col xs={12} sm={12} md={6} lg={3}  >
                   
                <div key={photo.id} className='data my-4'>
                <div  className="image-item">
          <img src={photo.url} alt={photo.title} />
          

        </div>
                </div>
                </Col>
            ))}
        </Row>
       </Container>
    </>
  );
};

export default Home;