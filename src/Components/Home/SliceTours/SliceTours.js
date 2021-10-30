import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SliceTour from './SliceTour';


const SliceTours = () => {
    const [Tours , setTours]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/Tours')
        .then(res => res.json())
        .then(data => setTours(data))

    }, []);


    return (
        <div className="container mt-5 pt-3">
            <h1 className="fs-1 text-primary mb-5">Most Popular Tours</h1>
            <Row xs={1} md={3} className="g-4 container">
            {
                Tours.slice(0,6).map(tour => <SliceTour
                key = {tour.id}
                tour = {tour}
                ></SliceTour>)
            }
</Row>
        </div>
    );
};

export default SliceTours;