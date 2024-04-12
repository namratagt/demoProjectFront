import React, { useState } from "react";
import "./checkout.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { SettingsPhone } from "@mui/icons-material";
function Checkout({ user, setuser, nums, activeStep, setActiveStep }) {
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [phone, setPhone] = useState("");
  // const urlbase = "https://healthy-pear-sunglasses.cyclic.app/api";
  const urlbase = "https://ecom-nczu.onrender.com/api";

  const handleOrder = async () => {
    // const data = JSON.stringify(nums);
    if (
      name == "" ||
      address == "" ||
      city == "" ||
      postalCode == "" ||
      phone == ""
    ) {
      toast.error("Enter all the required fields");
      return;
    } else if (phone.length != 10) {
      toast.error("Enter a valid phone number");
      return;
    }
    try {
      const newOrder = await axios.post(`${urlbase}/orders/add`, {
        params: {
          products: nums,
          userId: user._id,
          name: name,
          phone: phone,
          postalCode: postalCode,
          city: city,
          address: address,
        },
      });

      setOrderPlaced(true);
      setActiveStep(3);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUserName = async (e) => {
    setName(e.target.value);
  };
  const handlePhone = async (e) => {
    setPhone(e.target.value);
  };
  const handleUserAddress = async (e) => {
    setAddress(e.target.value);
  };
  const handleUserCity = async (e) => {
    setCity(e.target.value);
  };
  const handleUserPostalCode = async (e) => {
    setPostalCode(e.target.value);
  };
  return (
    <>
      {orderPlaced ? (
        <div className="Placed">
          <TaskAltIcon sx={{ fontSize: "3rem", color: "green" }} />
          <h1> Order Placed </h1>
        </div>
      ) : (
        <div className="checkout-main">
          <Toaster />
          <h1>Checkout</h1>
          <div className="checkout-container">
            <div className="shipping">
              <h3>Shipping Information</h3>
              <form>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" onChange={handleUserName} required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" onChange={handlePhone} required />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" onChange={handleUserAddress} required />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" onChange={handleUserCity} required />
                </div>
                <div className="form-group">
                  <label>Postal Code</label>
                  <input type="text" onChange={handleUserPostalCode} required />
                </div>
              </form>
              <button onClick={handleOrder}>Complete Purchase</button>
            </div>
            <div className="checkout-cart">
              <div>
                {nums.map((item) => (
                  <div className="checkout-cart-item" key={item._id}>
                    <img src={item.img[0]} alt="product" />
                    <span>{item.title}</span>{" "}
                    <span>
                      {" "}
                      <strong>Rs.{item.price[1]}</strong>
                    </span>
                  </div>
                ))}
              </div>
              <h4>Total: Rs.{user.sum}</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Checkout;
