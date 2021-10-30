import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tour = (props) => {
    const {name, details, cost, img}= props.tour
    
    return (
        <div className="align-content-center">
           <Col>
      <Card>
        <Card.Img variant="top" src={img} width="150px" height="200px" />
        <Card.Body >
          <h1>{name}</h1>
          <Card.Text className="my-3">
            {details}
            <h3 className="my-3">Cost:{cost}</h3>
            { <Link to={`/Booking`}>
                <button className="btn btn-primary">Book Now</button>
            </Link>}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>  
        </div>
    );
};

export default Tour;