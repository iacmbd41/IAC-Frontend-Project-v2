import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

const Slider = () =>{
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-block w-100 rounded"
                    src="./wo1.jpg"
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
                    src="./dis1.jpg"
                    alt="First"
                    height={300}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 rounded"
                    src="./wo2.jpg"
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
                    src="./dis3.jpg"
                    alt="First"
                    height={300}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 rounded"
                    src="./wo3.jpg"
                    alt="Third"
                    height={300}
                    />
                    <Carousel.Caption>
                    <h3>Offer Now Up to 30%</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 rounded"
                    src="./dis4.jpg"
                    alt="First"
                    height={300}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 rounded"
                    src="./wo4.jpg"
                    alt="Third"
                    height={300}
                    />
                    <Carousel.Caption>
                    <h3>Offer Now Up to 30%</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 rounded"
                    src="./wo5.jpg"
                    alt="Third"
                    height={300}
                    />
                    <Carousel.Caption>
                    <h3>Offer Now Up to 30%</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 rounded"
                    src="./dis2.jpg"
                    alt="Third"
                    height={300}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider