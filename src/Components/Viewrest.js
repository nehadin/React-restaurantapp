import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Reviews from './Reviews';

function Viewrest() {

  const params = useParams()
  // console.log(params.id);              //displays the item id - 1 or 2...

  // line 12 to 29 , is the API call for the API data-json file...... copy pasted from Resturantlist.js file
  const [allrestaurant, setallrestaurant] = useState([])  //defining state for storing data

  //defining a function for getting data from json file , with API call
  const restaurantdata = async () => {
    await fetch('/restaurants.json').then(data => {           // await keyword is used just before the asynchronous code calling the API file
      data.json().then(result => {
        // console.log(result);
        setallrestaurant(result.restaurants);
      })
    })

  }

  // console.log(allrestaurant);

  const restdata = allrestaurant.find(item => item.id == params.id)
  // console.log(restdata);

  useEffect(() => {             // similar to ngoninit block
    restaurantdata()
  }, [])



  return (

    <div>
      {restdata ? (
        <Row>
          <Col className='ms-5'>
            <Image src={restdata.photograph} fluid />
          </Col>
          <Col className='mt-3' >
            <h1>{restdata.name}</h1>
            <h3>{restdata.cuisine_type}</h3>

            <p>Address : <br />{restdata.address}</p>

          

          <Operatingtime timedata={restdata.operating_hours}></Operatingtime>
          <br/> <br/>
          <Reviews reviewdata={restdata.reviews}></Reviews>
          </Col>

        </Row>
      ) : 'null'}
    </div>
  )
}

export default Viewrest