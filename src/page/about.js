import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Image,thumbnail} from 'react-bootstrap/Image';
const About = () =>{
    return (
        <Container>
          <Row>
            <Col sm={8}>
                <p style={{textAlign:'justify',paddingBlock:'10px',fontFamily:'Gill Sans'}}> 
                    This is a virtual platfrom there have  original realtime  feel
                    Our objective is to provide customers with a virtual shopping experience that emulates the essence of physical markets through our online shop. We aim to recreate the atmosphere, convenience, and personal interaction of physical marketplaces in a digital environment. By achieving this, we strive to offer the following:
                </p>
                <ul  style={{textAlign:'justify',paddingBlock:'10px',fontFamily:'Gill Sans'}}>
                    <li><b>Authenticity</b>: We aim to capture the authenticity and charm of physical markets by curating a diverse range of high-quality products that reflect the unique offerings found in traditional marketplaces.</li>
                    <li><b>Interactive Experience</b>: Through innovative technologies and user-friendly interfaces, we intend to create an engaging and interactive online shopping experience. This may include features such as 360-degree product views, virtual product demonstrations, and real-time customer support.</li>
                    <li><b>Product Variety</b>: Our online shop will offer a wide selection of products across different categories, mirroring the diverse range found in physical markets. We aim to cater to various customer preferences and provide ample choices to meet their needs.</li>
                    <li><b>Vendor Collaboration</b>: We seek to collaborate with vendors and artisans from different regions, fostering partnerships that bring their products to a global audience. By showcasing the stories and craftsmanship behind each item, we aim to create a sense of connection between customers and sellers.</li>
                    <li><b>Personalization</b>: We aim to provide personalized recommendations and tailored shopping experiences to our customers. By understanding their preferences, shopping history, and browsing behavior, we can offer relevant product suggestions and enhance their overall satisfaction.</li>
                    <li><b>Community Engagement</b>: Building a vibrant online community is a priority for us. We plan to incorporate features such as customer reviews, ratings, and forums where shoppers can interact, share experiences, and provide recommendations, fostering a sense of belonging and community.</li>
                    <li><b>Convenience and Efficiency</b>: Our objective is to ensure that the online shopping process is seamless and convenient. This includes providing efficient search and filtering options, a user-friendly checkout process, secure payment methods, and reliable order fulfillment and delivery services.</li>
                    <li><b>Customer Support</b>: We are committed to offering excellent customer support through various channels, including live chat, email, and phone assistance. Our goal is to address customer inquiries promptly, provide guidance, and resolve any issues or concerns they may have.</li>
                    <li><b>Marketplace Atmosphere</b>: We aim to create a virtual ambiance that captures the spirit of physical markets. This may involve incorporating vibrant visuals, storytelling elements, and features that allow customers to explore and discover products in an immersive manner.</li>
                    <li><b>Continuous Improvement</b>: We are dedicated to continuously enhancing our online shop based on customer feedback, market trends, and emerging technologies. We will strive to introduce new features and functionalities that enhance the virtual shopping experience and exceed customer expectations.</li>
                </ul>
                <p  style={{textAlign:'justify',paddingBlock:'10px',fontFamily:'Gill Sans'}}>By achieving these objectives, we aim to bridge the gap between physical markets and online shopping, providing customers with a virtual feel that evokes the essence of traditional marketplaces while enjoying the convenience and accessibility of e-commerce.</p>
            </Col>
            <Col sm={4}><img src="./istockphoto-12.jpg" className='rounded' style={{maxWidth:'400px'}}/></Col>
          </Row>
        </Container>
    );
}

export default About