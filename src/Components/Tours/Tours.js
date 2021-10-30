import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Tour from './Tour'



const Tours = () => {
    const [tours , setTours]= useState([]);

    useEffect(() => {
        fetch('https://shrouded-depths-77971.herokuapp.com/Tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, []);



    return (
        <div className="container mt-5 pt-3">
            
            <Row xs={1} md={3} className="g-4 container">
        {
            tours.map (tour=> <Tour
            key={tour.id}
            tour={tour}
            ></Tour>)
        }
</Row>
        </div>
    );
};

export default Tours;