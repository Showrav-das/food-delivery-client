import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';

const Services = () => {
    const [foods, setFoods] = useState([]);
    useEffect((data) => {
        fetch('https://vast-scrubland-70609.herokuapp.com/allfoods')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
        })
    }, [])

    return (
        <div>
            <h2 className="text-success">Services</h2>
            <div className="row">
                {
                    foods.map(food => <Service key={food._id} food={food}>
                 </Service>)   
            }
            </div>
        </div>
    );
};

export default Services;