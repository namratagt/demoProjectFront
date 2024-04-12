import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PolicyIcon from "@mui/icons-material/Policy";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import "./footer.css";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <div className="foot-main">
      <ul className="footer-policies">
        <li className="policies-item">
          <CheckCircleIcon sx={{ fontSize: "3rem" }} />
          Assured Quality
        </li>
        <li className="policies-item">
          <PolicyIcon sx={{ fontSize: "3rem" }} />
          Verified Products
        </li>
        <li className="policies-item">
          <AirportShuttleIcon sx={{ fontSize: "3rem" }} />
          Express Delivery
        </li>
      </ul>
      <div className="line-footer"></div>
      <div className="links">
        <div className="categories-footer">
          <div>Winter</div>
          <div>Tops</div>
          <div>Bottoms</div>
          <div>Dresses</div>
          <div>Ethnic</div>
          <div>Sarees</div>
        </div>
        <div className="Useful-Links">
          Useful Links
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/Login">Login</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
        </div>

        <div className="contacts">
          Contact Us
          <a
            className="contact-items"
            href="https://www.instagram.com/iconix.fashion?igshid=MzRlODBiNWFlZA%3D%3D"
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>
          <div className="contact-items">
            <CallIcon />
            <span> 7934567758</span>
          </div>
          <div className="contact-items">
            <MailIcon />
            <span>Mail</span>
          </div>
        </div>
      </div>
    </div>
  );
}
