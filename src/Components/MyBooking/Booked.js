import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Booked = (props) => {
    const{name, email, where, cost, address, phone}=props.book
    return (
        <div>
            <Card style={{ width: '300px' }}>
            <Card.Body>
                <Card.Title>{where}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Name: {name}</Card.Subtitle>
                <Card.Text>Email: {email}</Card.Text>
                <Card.Text>Address:{address}</Card.Text>
                <Card.Text>Number:{phone}</Card.Text>
                <Card.Text>Cost: {cost}</Card.Text>
                <Button>Cancel</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Booked;