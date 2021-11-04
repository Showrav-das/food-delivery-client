import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ food }) => {
  const { name, details, _id, img, currency } = food;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 g-4">
     <Card  className="h-100"> 
        <Card.Img variant="top" src={img} />
         <Card.Body>
          <Card.Title className="text-xl-md "> {name}</Card.Title>
                <h3>Price: {currency} </h3>   
          <Card.Text>
            {details}
         </Card.Text>
            <Link to={`details/${_id}`} > <button className="button-regular" >Purshase
      </button></Link>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Service;