import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddFood.css';
const AddFood = () => {
  const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://vast-scrubland-70609.herokuapp.com/allfoods', data)
          .then(res => {
            console.log(res);
            if (res.data.insertedId) {
              alert("food added successfully.Thank you");
                    reset();
                }
            })
    }

      return (
        <div className="add-service">
        <h2 className="text-success">Add A Food</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Food name" />
            <textarea {...register("details")} placeholder="Details" />
            <input type="number" {...register("currency")} placeholder="price" />
            <input {...register("img")} placeholder="image url" />
            <input className="button-regular" type="submit" />
        </form>
    </div>
      );
};

export default AddFood;