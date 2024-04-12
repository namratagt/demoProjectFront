import { Link } from "react-router-dom";
import "./productCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const ProductCard = ({ product, user, setUser }) => {
  const { _id, img, price, title } = product;
  const history = useNavigate();
  // const urlbase = "https://healthy-pear-sunglasses.cyclic.app/api";
  const urlbase = "https://ecom-nczu.onrender.com/api";

  const handlAddToWishList = async () => {
    if (user === undefined || user === null || Object.keys(user).length === 0) {
      toast.error("Please login first");
      return;
    }
    if (Object.keys(user).length > 0) {
      try {
        const newUser = await axios.post(
          `${urlbase}/users/add?type=wishlist&ph=${user.phone}&id=${_id}&size=m`
        );

        setUser(newUser.data);
        toast.success("Successfully added to wishlist!");
      } catch (error) {
        toast.error("Error in adding to wishlist!");
        console.log(error);
      }
    } else {
      history("/login");
    }
  };
  console.log(user);

  return (
    <div className="product">
      <Toaster />
      <span id="fav-icon-pc" onClick={handlAddToWishList}>
        <FavoriteIcon />
      </span>
      <Link to={`/product/singleProduct/${_id}`} key={_id}>
        <div className="image">
          <img src={img[0]} alt="product-img" />
        </div>{" "}
      </Link>
      <div className="detail">
        <div className="namePrice">
          <h5 className="title">{title.toUpperCase()}</h5>
          <div className="price">
            <span className="new-price"> Rs {price[1]}</span>
            <span>
              {price[0] > price[1] && (
                <span>
                  <span className="old-price">Rs.{price[0]} </span>
                  {Math.round(((price[0] - price[1]) / price[0]) * 100)}%{" "}
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
