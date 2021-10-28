import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

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
            <h1>Google log in</h1>
            <Button onClick={handleGoogleLogIn}> Google log in</Button>
        </div>
    );
};

export default Login;