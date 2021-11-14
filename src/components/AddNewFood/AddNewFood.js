import React from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddNewFood = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
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
        <Card className="border-0 shadow px-2 rounded mx-auto mt-3">
            <h2 className="mt-5 text-center text-danger">Add New Food Item</h2>
            <Card.Body>
                <form onSubmit={handleSubmit(onSubmit)} className="text-start w-50 mx-auto">
                    <input required  {...register("title")} type="text" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="Food name " /> <br />

                    <input required  {...register("price")} type="text" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="Price " /> <br />

                    <input required  {...register("desc")} type="text" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="Description " /> <br />

                    <input required  {...register("rating")} type="number" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="Rating" /> <br />

                    <input required  {...register("ratingCount")} type="text" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="Rating Count" /> <br />

                    <input required {...register("img")} type="text" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="enter a valid image url " /> <br />


                    <input type="submit" value="Add " className="my-4 p-2 rounded border-1 w-100 btn btn-danger" />
                </form>

            </Card.Body>
        </Card>
    );
};

export default AddNewFood;