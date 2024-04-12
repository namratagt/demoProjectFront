import React from "react";

const OrderHistory = ({ orders }) => {
  console.log(orders);
  return (
    <>
      {orders.map((item) => (
        <div key={item._id} className="order-item">
          <div key={item.name} className="order-details">
            <div className="product-img-profile-oh">
              <img src={item.img} alt=" product" />
            </div>
            <div className="oh-details">
              <div className="item-oh1">
                <div>
                  <strong>{item.title}</strong>
                </div>
              </div>
              <div className="item-oh2">
                <div>{Date(item.date).slice(0, 16)}</div>
                <div>Rs. {item.price}</div>
                <div>{item.size.toUpperCase()}</div>
                <div>Qty: {item.qty}</div>
                <div>Address: {item.address}</div>
                <div>City: {item.city}</div>
                <div>Order ID: {item._id}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderHistory;
