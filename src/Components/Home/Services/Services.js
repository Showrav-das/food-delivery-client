import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';

const Services = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://food-server-sl4s.onrender.com/allfoods')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
        })
    }, [])
    //console.log(foods);
    if (foods.length==0) {
        return <h1>Loading...</h1>
    }
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