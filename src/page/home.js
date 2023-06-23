import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import CategoryList from '../component/categlist';
import ListTabs from '../component/listTab';

const Home = () =>{
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
        <Container>
            <Row>
                <Col sm={6}>
                    <CategoryList/>
                </Col>
                <Col sm={6}>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 rounded"
                        src="./logo192.png"
                        alt="First"
                        height={300}
                        />
                        <Carousel.Caption>
                        <h3>Regular Offer Up to 35%</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 rounded"
                        src="./apple.jpg"
                        alt="Second"
                        height={300}
                        />
                        <Carousel.Caption>
                        <h3>Live time offer Up to 20%</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 rounded"
                        src="./watch.jpg"
                        alt="Third"
                        height={300}
                        />
                        <Carousel.Caption>
                        <h3>Offer Now Up to 30%</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </Col>
                <Col sm={12}>
                    <br/>
                    <div md={12} style={{padding:'7px', borderRadius:'5px'}}>
                        <ListTabs/>
                        <br/><br/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home