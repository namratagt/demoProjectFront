import React from "react";
import "./profilepage.css"; // Make sure to link the CSS file
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import OrderHistory from "../orderHistory/orderHistory";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
const ProfilePage = ({ user, setUser }) => {
  const [orders, setOrders] = useState({});
  const [disOrder, setDisOrder] = useState(false);
  const urlbase = "https://ecom-nczu.onrender.com/api";
  // const urlbase = "https://healthy-pear-sunglasses.cyclic.app/api";

  useEffect(() => {
    axios
      .get(`${urlbase}/users/orders?userId=${user._id}`)
      .then((data) => {
        setOrders(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="profile-page">
      <h1>Hi {user.name}</h1>

      <div className="profile-info">
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Phone:</strong> {user.phone}
        </div>
      </div>

      <div
        onClick={() => {
          setDisOrder(!disOrder);
        }}
        id="orderHist"
      >
        <div className="orderHist-item">
          <strong> Order History</strong>
          {disOrder ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
        {disOrder && orders.length > 0 ? (
          <OrderHistory orders={orders} />
        ) : (
          <></>
        )}{" "}
      </div>

      <Button
        onClick={() => {
          setUser({});
        }}
        variant="text"
        sx={{
          width: "fit-content",
        }}
      >
        Log Out
      </Button>
    </div>
  );
};

export default ProfilePage;
