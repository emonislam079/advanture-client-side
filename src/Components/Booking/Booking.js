import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import './Booking.css'




const Booking = () => {
    const [tour, setTour] = useState({});
    const{user } = useAuth();
    const { tourId } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
    

    useEffect(() => {
        const url = `http://localhost:5000/Tours/${tourId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTour(data));
    }, []);

    return (
        <div className="container mt-5">
  <div className="row p-3">
    <div className="col">
    <Col>
      <Card>
        <Card.Img variant="top" src={tour.img}/>
        <Card.Body>
          <Card.Title>{tour.name}</Card.Title>
          <Card.Text>
            {tour.details}
          </Card.Text>
          <Card.Title>Cost:{tour.cost}</Card.Title>
        </Card.Body>
      </Card>
    </Col> 
    </div>
    <div className="col">
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <h1>Booking</h1>
                
                <form className="Booking-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" />
            </form>
            </div>
    </div>
  </div>
    
        </div>
    );
};

export default Booking;