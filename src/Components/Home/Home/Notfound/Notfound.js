import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import image from '../../../../images/error-404-concept-landing-page_52683-11840.jpg'
const Notfound = () => {
    return (
        <div>
            <img src={image} alt="" /> <br />
            <Link to="/"><Button variant="warning">Back Please</Button>
            </Link>
        </div>
    );
};

export default Notfound;