import React from "react";
import { Container } from "react-bootstrap";

const Cart = ({ myOrders, deleteOrder }) => {


  return (
    <div className="my-4">
      <Container>
        <div class="row row-cols-1 row-cols-md-3 g-4">

          {myOrders.map((order) =>
            <div class="col">
              <div class="card h-100">
                <img src={order.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{order.foodName}</h5>
                  <p class="card-text">{order.description}</p>
                  <p class="card-text">quantity : {order.quantity}</p>
                  <p class="card-text">price : {order.price}</p>
                  <p class="card-text">status : {order.status}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted"> <button onClick={() => { deleteOrder(order._id) }} className="btn btn-danger w-100"> Cancel Order</button> </small>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Cart;
