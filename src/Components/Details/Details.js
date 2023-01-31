import React, { useEffect, useState,useRef } from 'react';
import { Card,Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
// import UseFirebase from '../../Hooks/UseFirebase';

const Details = () => {
    const { id } = useParams();
    console.log(id);
    const { users } = UseAuth();
    const [customer, setCustomer] = useState({});
    const [details, setDetails] = useState({});
    useEffect(() => {
        const url = `http://localhost:4000/allfoods/${id}`;
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => {
         const foundTrainer = data.find(singleTrainer=> singleTrainer.id ==id);
                setDetails(foundTrainer)
                console.log(foundTrainer);
                // console.log(singleTrainer);
            })
    }, [])

    console.log(details);
    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedUser = { name: updatedName, email: users.email };
        setCustomer(updatedUser);
    }

    const handleEmailChange = e => {
        const updatedEmail = e.target.value;
        const updatedUser = { name: users.name, email: updatedEmail }
        setCustomer(updatedUser);
    }
    const handleUser = (e) => {
        e.preventDefault();
        alert('successfully adeed');
    }

    return (
        <div className="d-flex justify-content-evenly">
             <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={details?.img} />
  <Card.Body>
    <Card.Title>Food Name: {details?.name} </Card.Title>
    <Card.Text>
     {details?.details}
     {details.id}
    </Card.Text>
    <Button variant="primary">Add to Cart</Button>
  </Card.Body>
     </Card>
     </div>
    <div style={{marginLeft:"20px"}}>
        <h2>Submit this form for order</h2>
         <form onSubmit={handleUser} style={{background:"green"}} >
                <input type="text" style={{marginTop:"20px"}} onChange={handleNameChange} value={users.displayName || ''} /> <br />
                <input type="text" style={{marginTop:"20px"}} placeholder="write your city name" required name="" id="" /> <br />
                <input type="text" style={{marginTop:"20px"}} value={details.name} required name="" id="" /> <br />
                <input type="number" style={{marginTop:"20px"}} placeholder="write your number" required name="" id="" /> <br />
                <input type="submit" required style={{background:"black",color:"white",borderStyle:"none"}} value="Submit" />
            </form>   
    </div>
    </div>
    );
};

export default Details;