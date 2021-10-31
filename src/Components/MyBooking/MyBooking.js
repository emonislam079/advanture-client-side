import React, { useEffect, useState } from 'react';
import { Card, Row, Button } from 'react-bootstrap';


const MyBooking = () => {
    const [booked, setBooked]= useState([]);
    useEffect(()=>{
        fetch('https://shrouded-depths-77971.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setBooked(data))
    }, []);

    const handleDelete=id=>{
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            const url = `https://shrouded-depths-77971.herokuapp.com/books/${id}`;
            fetch(url, {
               method:'DELETE' 
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert("deleted successfully")
                    const reamine = booked.filter(book => book._id !== id)
                    setBooked(reamine);
    
                }
            })
        }
        
    }

    return (
        <div className="container mt-5 pt-3">
            <Row xs={1} md={3} className="g-4 container">
            {
                booked.map(book=><div
                key={book._id}
                book={book}
                >
                    <Card style={{ width: '300px' }}>
            <Card.Body>
                 <Card.Title>{book.where}</Card.Title>
                 <Card.Subtitle className="mb-2 text-muted">Name: {book.name}</Card.Subtitle>
                 <Card.Text>Email: {book.email}</Card.Text>
                 <Card.Text>Address:{book.address}</Card.Text>
                 <Card.Text>Number:{book.phone}</Card.Text>
                 <Card.Text>Cost: {book.cost}</Card.Text>
                 <Button onClick={()=>handleDelete (book._id) }>Cancel</Button>
             </Card.Body>
             </Card>
                </div>)
            }
            </Row>
        </div>
    );
};

export default MyBooking;

