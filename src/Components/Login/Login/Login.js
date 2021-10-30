import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import image from '../../../images/logo/gogle.png'

const Login = () => {

  const { signInUsingGoogle } = useAuth();


  const history= useHistory();
  const locations= useLocation();

  const handleGoogleLogIn = () =>{
    signInUsingGoogle()
    .then(result =>{
      history.push(locations.state?.from||'/home');
    })
  }

    return (
        <div>
          <h1 className="mt-5">
          <span className="text-primary">G</span> 
          <span className="text-secondary" >O</span> 
          <span className="text-danger">o</span> 
          <span className="text-dark">g</span> 
          <span className="text-warning">l</span> 
          <span className="text-primary">E</span>
          </h1>
          <Card className="mx-auto mb-3" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>Google Log in</Card.Title>
    
    <Button onClick={handleGoogleLogIn}>Log in</Button>
  </Card.Body>
</Card>
            
            
        </div>
    );
};

export default Login;