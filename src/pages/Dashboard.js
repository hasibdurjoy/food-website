import React, { useEffect, useState } from "react";
import useFirebase from "../hooks/useFirebase.js";
import Cart from "./Carts.js";

const Dashboard = () => {
  const { user } = useFirebase();
  console.log(user);
  const userId = user.uid;
  console.log(userId);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/?uid=${user.uid}`)
      .then(res => res.json())
      .then(data => setMyOrders(data))
  }, [user]);
  console.log("orders", myOrders);

  const deleteOrder = (id) => {
    console.log(id);
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
            const remainingBookings = myOrders.filter(booking => booking._id !== id);
            setMyOrders(remainingBookings);
          }
        });
    }
  }
  return (
    <div>
      <h2 className="text-center text-danger">Your Orders</h2>
      <Cart myOrders={myOrders} deleteOrder={deleteOrder}></Cart>
    </div>
  );
};

export default Dashboard;
