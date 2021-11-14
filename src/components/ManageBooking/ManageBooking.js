import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const ManageBooking = ({ booking, handleDeleteBooking, handleUpdateBooking }) => {
    const { user } = useAuth();
    const { _id, name, email, phone, quantity, foodName, status } = booking;

    return (
        <tr>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{foodName}</td>
            <td>{quantity}</td>
            <td>{status}</td>
            <td>
                <div className="d-flex justify-content-around pt-2">
                    <button onClick={() => { handleDeleteBooking(_id) }} className="btn btn-danger rounded-pill">Cancel</button>
                    <button onClick={() => { handleUpdateBooking(_id) }} className="btn btn-success rounded-pill">Approve</button>
                </div>
            </td>
        </tr>



    );
};

export default ManageBooking;