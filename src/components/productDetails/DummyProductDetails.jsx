import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Rating,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ShareIcon from "@mui/icons-material/Share";
import { RWebShare } from "react-web-share";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Comments from "../comments/comments";

import { Buynow } from "../buynow/Buynow";

const DummyProductDetails = ({ user, setUser }) => {
  const { _id } = useParams();
  const navigate = useNavigate();
  //   // const product = getById(_id);
  const [size, setSize] = useState("m");
  const [product, setProduct] = useState({});
  const [isActive, setActive] = useState("");
  //   const url = `https://iconixnepal.com/product/singleProduct?id=${_id}`;
  const [open, setOpen] = useState(false);
  const [disProdRev, setProdRev] = useState(false);
  const [rate, setRate] = useState(0);
  const [com, setComm] = useState("");
  const [buyNow, setBuyNow] = useState(false);
  const [activestep, setActiveStep] = useState(0);
  const urlbase = "http://localhost:8000/api/";
  const url = `http://localhost:3000/product/singleProduct/${_id}`;

  useEffect(() => {
    const getCvs = async () => {
      try {
        const res = await axios.get(`${urlbase}products/singleProduct/${_id}`);

        if (res.data.success === true) {
          console.log("hi this is data", res.data.data);
          setProduct(res.data.data);
          setActive(res.data.data.img[0]);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    getCvs();
  }, []);
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleAddtoCart = async () => {
    if (Object.keys(user).length > 0) {
      try {
        const newUser = await axios.post(
          `${urlbase}users/add/${user.phone}/${_id}/cart/${size}`
        );

        setUser(newUser.data);
        toast.success("Successfully added to cart!");
      } catch (error) {
        toast.error("Error in adding to cart!");
        console.log(error);
      }
    } else {
      navigate("/login");
    }
  };
  const handleCommentSubmit = async () => {
    console.log(com);
    try {
      axios
        .post(`${urlbase}product/rating/${_id}`, { num: rate })
        .then((data) => console.log(data.data))
        .catch((err) => console.log(err));
      const data = await axios.post(`${urlbase}products/addComment/${_id}`, {
        comm: com,
      });
      console.log(data.data);
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setComm(null);
      setRate(0);
    }
  };
  const handleAddtoWishlist = async () => {
    if (Object.keys(user).length > 0) {
      try {
        const newUser = await axios.post(
          `${urlbase}users/add/${user.phone}/${_id}/wihlist/${size}`
        );
        console.log(newUser.data);
        setUser(newUser.data);
        toast.success("Successfully added to wishlist!");
      } catch (error) {
        toast.error("Error in adding to wishlist!");
        console.log(error);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="product-detail">
      <Toaster />
      {product && Object.keys(product).length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <div className="product-image">
            <div className="allimages">
              {product.img.map((productImages, index) => (
                <div key={index} onClick={() => setActive(productImages)}>
                  <img
                    width="30%"
                    height="auto"
                    src={productImages}
                    alt="Product Images"
                  />
                </div>
              ))}
            </div>
            <div className="active-image">
              <img src={isActive} alt="Product" />
            </div>
          </div>
          <div className="product-desc">
            <div className="prod-desc-container">
              <div className="prod-desc-item">
                <h3 className="">{product.title.toUpperCase()}</h3>
                Category: {product.type.toUpperCase()} <br />
                Price: Rs.{product.price[0]}
                <div className="size-selector ">
                  <FormControl
                    sx={{
                      width: "100%",
                      // backgroundColor: "rgb(206, 205, 205)",
                    }}
                  >
                    <InputLabel
                      sx={{
                        color: "black",
                        fontWeight: "1000px",
                        padding: "0px",
                      }}
                      id="demo-simple-select-label"
                    >
                      Size
                    </InputLabel>
                    <Select
                      sx={{ color: "black" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={size}
                      label="Size"
                      onChange={handleSizeChange}
                    >
                      <MenuItem value={"xs"}>XS</MenuItem>

                      <MenuItem value={"s"}>S</MenuItem>
                      <MenuItem value={"m"}>M</MenuItem>
                      <MenuItem value={"l"}>L</MenuItem>
                      <MenuItem value={"xl"}>XL</MenuItem>
                      <MenuItem value={"xxl"}>XXL</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="item-button-pd">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "black",
                  outlineColor: "black",
                }}
                onClick={handleAddtoCart}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  outlineColor: "black",
                }}
                onClick={handleAddtoWishlist}
              >
                Add to Wishlist
              </Button>
            </div>
            <p className="item-description">{product.desc}</p>
          </div>
          <div className="prod-review">
            <div className="prod-rev-item">
              <Typography component="legend">Rating</Typography>
              <Rating
                name="read-only"
                value={product.star / product.count}
                readOnly
              />
            </div>{" "}
            <div className="prod-rev-item">
              <Typography>
                <strong>Comments</strong>
              </Typography>
              {product.comments.map((item, index) => {
                return <Comments key={index} com={item} />;
              })}
            </div>
            <div className="prod-rev-item">
              <div
                onClick={() => {
                  setProdRev(!disProdRev);
                }}
                id="ad-comm"
              >
                Add Comment
                {disProdRev ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
              {disProdRev ? (
                <div className="pr-1">
                  <TextField
                    id="outlined-basic"
                    label="Comment"
                    variant="outlined"
                    defaultValue={com}
                    onChange={(e) => {
                      setComm(e.target.value);
                    }}
                  />
                  <Typography component="legend">Rate</Typography>
                  <Rating
                    name="simple-controlled"
                    value={rate}
                    onChange={(event, newValue) => {
                      setRate(newValue);
                    }}
                  />
                  <Button
                    sx={{ backgroundColor: "black" }}
                    variant="contained"
                    onClick={handleCommentSubmit}
                  >
                    Comment
                  </Button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default DummyProductDetails;
