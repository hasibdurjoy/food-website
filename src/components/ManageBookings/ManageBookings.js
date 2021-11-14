import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Modal, Row, Table } from 'react-bootstrap';
import ManageBooking from '../ManageBooking/ManageBooking';
import './ManageBookings.css';

const ManageBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [updateBooking, setUpdateBooking] = useState(false);

    //delete bookings
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [updateBooking])

    const handleDeleteBooking = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingBookings = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBookings);
                    }
                });
        }
    }


    const handleUpdateBooking = (bookingId) => {
        setUpdateBooking(false);
        const proceed = window.confirm('Are you want to approve this booking??');
        if (proceed) {
            const url = `http://localhost:5000/orders/${bookingId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Approved Successful');
                        setUpdateBooking(true)
                    }
                })
        }
    }

    return (
        <div className="m-4">
            <h3 className="my-3 ">Manage All Bookings</h3>
            <Table responsive bordered className="table-container">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Food</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <ManageBooking key={booking._id} booking={booking} handleDeleteBooking={handleDeleteBooking} handleUpdateBooking={handleUpdateBooking}></ManageBooking>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageBookings;