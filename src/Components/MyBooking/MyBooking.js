import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Booked from './Booked';

const MyBooking = () => {
    const [booked, setBooked]= useState([]);
    useEffect(()=>{
        fetch('https://shrouded-depths-77971.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setBooked(data))
    }, []);

    return (
        <div className="container mt-5 pt-3">
            <Row xs={1} md={3} className="g-4 container">
            {
                booked.map(book=><Booked
                key={book._id}
                book={book}
                ></Booked>)
            }
            </Row>
        </div>
    );
};

export default MyBooking;