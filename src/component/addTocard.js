import React from "react";
import '../Addcard.css';
import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";


const AddtoCard = () =>{
    const params = useParams();
    const [adcrdItem, setAddcrdItem] = useState([])
    const fetchCardInfo = () => { 
    return fetch(`http://localhost:7070/product/${params.id}`) 
            .then((responseData) => responseData.json()) 
            .then((jsonData) => setAddcrdItem(jsonData)) 
    }
    
    useEffect(() => {
        fetchCardInfo();
    }, [])

    const [prevprice, setPrevprice] = useState()
    const prePrice = ()=>{
       setPrevprice(adcrdItem.price);
    }
    useEffect(() => {
        prePrice();
    }, [])
    //console.log(prePrice);
    const [pmVal, setCount] = useState(1);
    const [total, setTotal] = useState(prevprice);
   
    const handlemChange = () =>{
        setCount(pmVal-1);
        setTotal(total*pmVal);
     }
     const handlepChange = () =>{
        setCount(pmVal+1);
        setTotal(total*pmVal);
     }

    // console.log(params.id);
    return(
        <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="h-100 py-5">
            <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
                <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
                <MDBCardBody className="text-black">
                    <MDBRow>
                    <MDBCol lg="7" className="px-5 py-4">
                        <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                        >
                        Your products
                        </MDBTypography>
                     
                            <div className="d-flex align-items-center mb-5">
                            <div className="flex-shrink-0">
                                <MDBCardImage
                                src={adcrdItem.imgLink}
                                fluid
                                style={{ width: "150px" }}
                                alt="p-image"/>
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <a href="#!" className="float-end text-black">
                                <MDBIcon fas icon="times" />
                                </a>
                                <MDBTypography tag="h5" className="text-primary">
                                    {adcrdItem.name}
                                </MDBTypography>
                                <div className="d-flex align-items-center">
                                <p className="fw-bold mb-0 me-5 pe-3">Tk {adcrdItem.price}</p>
                                <div className="def-number-input number-input safari_only">
                                    <button className="minus"  onClick={handlemChange}></button>
                                    <input
                                    className="quantity fw-bold text-black"
                                    min={0}
                                    defaultValue={1}
                                    value={pmVal}
                                    type="number"
                                    />
                                    <button className="plus" onClick={handlepChange}></button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <hr
                        className="mb-4"
                        style={{
                            height: "2px",
                            backgroundColor: "#1266f1",
                            opacity: 1,
                        }}
                        />
                        <div
                        className="d-flex justify-content-between p-2 mb-2"
                        style={{ backgroundColor: "#e1f5fe" }}
                        >
                        <MDBTypography tag="h5" className="fw-bold mb-0">
                            Total:
                        </MDBTypography>
                        <MDBTypography tag="h5" className="fw-bold mb-0">
                            Tk {total}
                        </MDBTypography>
                        </div>
                    </MDBCol>
                    <MDBCol lg="5" className="px-5 py-4">
                        <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                        >
                        Payment
                        </MDBTypography>
                        <form className="mb-5">
                        <MDBInput
                            className="mb-5"
                            type="text"
                            size="lg"
                            defaultValue="1234 5678 9012 3457"
                            placeholder="Card Number"
                        />
                        <MDBInput
                            className="mb-5"
                            type="text"
                            size="lg"
                            defaultValue="MD. Harun"
                            placeholder="Card Name"
                        />
                        <MDBRow>
                            <MDBCol md="6" className="mb-5">
                            <MDBInput
                                className="mb-4"
                                label="Expiration"
                                type="text"
                                size="lg"
                                minLength="7"
                                maxLength="7"
                                defaultValue="01/22"
                                placeholder="MM/YYYY"
                            />
                            </MDBCol>
                            <MDBCol md="6" className="mb-5">
                            <MDBInput
                                className="mb-4"
                                label="Cvv"
                                type="text"
                                size="lg"
                                minLength="3"
                                maxLength="3"
                                placeholder="&#9679;&#9679;&#9679;"
                                defaultValue="&#9679;&#9679;&#9679;"
                            />
                            </MDBCol>
                        </MDBRow>
                        <MDBBtn block size="lg">
                            <a href="/checkout/" style={{color:'#fff',textDecoration:'none'}}>Checkout</a>
                        </MDBBtn>
                        
                        <MDBTypography
                            tag="h5"
                            className="fw-bold mb-5">
                                <br/>
                            <a href="/home" style={{textDecoration:'none'}}>
                                <MDBIcon fas icon="angle-left me-2" />
                                Back to shopping
                            </a>
                        </MDBTypography>
                        </form>
                    </MDBCol>
                    </MDBRow>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
    </section>
    )
}

export default AddtoCard