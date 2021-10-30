import React from 'react';
import { FormControl, InputGroup,Button } from 'react-bootstrap';

const Subscrive = () => {
    return (
        <div className="container w-50 align-center bg-secondary rounded-3 mt-5">
            <h1 className="mt-5 p-3 text-dark">Subscribe To Our Newsletter For Latest Update</h1>
            <>
            <InputGroup size="lg" className="pb-5">
    <FormControl
      placeholder="Enter Your Email"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="primary" id="button-addon2">
      Subscribe
    </Button>
  </InputGroup>

</>
            
        </div>
    );
};

export default Subscrive;