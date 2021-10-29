import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Find.css'

const Find = () => {
  const [date, setDate] = useState(new Date());
    return (
        <div className = "container mt-5">
            <h1 className="name">Find your next tour</h1>
            <h1>Where would you like to go?</h1>
            <Form className="shadow-lg p-3 mb-5 bg-body rounded text-start">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="fs-3">Where To</Form.Label>
    <Form.Control type="text" placeholder="Where To" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="duedate">
  <Form.Label className="fs-3">When</Form.Label>
              <Form.Control
                type="date"
                name="duedate"
                placeholder="Due date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="fs-3">Type</Form.Label>
  <Form.Select aria-label="Default select example">
  <option>Adventure</option>
  <option value="1">Sea Side</option>
  <option value="2">Forest</option>
  <option value="3">Park</option>
</Form.Select>
</Form.Group>
  
{/* link to tripe page */}

<Link to={`/About`}>
                <button className="btn btn-primary">Find Now</button>
            </Link>
</Form>
        </div>
    );
};

export default Find;