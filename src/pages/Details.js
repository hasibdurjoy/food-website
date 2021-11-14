import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';

const Details = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then(res => res.json())
      .then(data => setFood(data))
  }, [])
  console.log(food);
  const history = useHistory();
  const { user } = useFirebase();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    const booking = {
      name: user.displayName,
      email: user.email,
      foodName: food.title,
      phone: data.phone,
      address: data.address,
      description: data.description,
      quantity: data.person,
      uid: user.uid,
      img: food.img,
      status: "pending",
      price: food.price,
      rating: food.rating
    }

    fetch('http://localhost:5000/orders', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          alert('successfully added');
          reset();
        }
      })
  }

  return (
    <Card className="border-0 shadow px-2 rounded w-50 mx-auto" my-5>
      <Card.Body>
        <h4>Book Now</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="text-start">
          <input readOnly  {...register("name")} type="text" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="name " defaultValue={user.displayName} /> <br />


          <input readOnly  {...register("email")} type="email" className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="email address" defaultValue={user.email} /> <br />

          <input readOnly  {...register("food")} type="text" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="name " defaultValue={food.title} /> <br />

          <input  {...register("phone", { required: true })} type="number" className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="phone number" /> <br />

          <input  {...register("address", { required: true })} type="text" className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="address" /> <br />

          <input type="number" {...register("person", { required: true })} className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="quantity" /> <br />

          <textarea  {...register("description")} type="textarea" className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="Description" /> <br />


          <input type="submit" value="Order Now" className="my-4 p-2 rounded border-1 w-100 btn btn-danger" />
        </form>

      </Card.Body>
    </Card>
  );
};

export default Details;