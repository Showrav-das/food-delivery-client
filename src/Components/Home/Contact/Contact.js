import React from 'react';
import { FloatingLabel, Form,Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <br />
         <Form.Floating className="mb-3">
        <Form.Control
      id="floatingInputCustom"
      type="email"
      placeholder="name@example.com"
    />
    <label htmlFor="floatingInputCustom">Email address</label>
    </Form.Floating>
    <Form.Floating>
    <Form.Control
      id="floatingPasswordCustom"
      type="text"
      placeholder="city"
    />
    <label htmlFor="floatingPasswordCustom">Write your City Name</label><br />
        </Form.Floating>
        <FloatingLabel controlId="floatingTextarea2" label="Give Your Feedback">
         <Form.Control as="textarea" placeholder="Leave a comment here"
         style={{ height: '100px' }}/>
            </FloatingLabel> 
            <div className="d-grid gap-5 w-50 mt-4" style={{ marginLeft: "250px" }}>
            <Button variant="info" size="lg">Submit</Button>
             </div>
        </div>
    );
};

export default Contact;