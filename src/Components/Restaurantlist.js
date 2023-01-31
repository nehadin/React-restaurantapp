import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Restcard from "./Restcard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from "../actions/RestaurantAction";
import { useDispatch } from "react-redux";


function RestaurantList() {
    const [allrestaurant, setallrestaurant] = useState([])  //defining state for storing data

    // //defining a function for getting datta from json file , with API call
    // const restaurantdata = async () => {
    //     await fetch('/restaurants.json').then(data => {           // await keyword is used just before the asynchronous code calling the API file
    //         data.json().then(result => {
    //             // console.log(result);
    //             setallrestaurant(result.restaurants);
    //         })
    //     })

    }

    console.log(allrestaurant);

    useEffect(() => {             // similar to ngoninit block
        restaurantdata()
    }, [])
    return (


        <Row>
            {
                allrestaurant.map(item => (
                    <Restcard data={item}></Restcard>
                ))
            }

        </Row>
    )

}

export default RestaurantList