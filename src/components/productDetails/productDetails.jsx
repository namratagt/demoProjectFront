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

const ProductDetails = ({ user, setUser }) => {
  const { _id } = useParams();
  const history = useNavigate();
  // const product = getById(_id);
  const [size, setSize] = useState("m");
  // const [product, setProduct] = useState({
  //   _id: "0",
  //   type: "...",
  //   desc: "...",
  //   xs: 0,
  //   s: 0,
  //   m: 0,
  //   l: 0,
  //   xl: 0,
  //   xxl: 0,
  //   color: ["..."],
  //   title: "abs",
  //   img: ["..."],
  //   price: [0, 0],
  //   __v: 1,
  //   comments: [".."],
  //   count: 0,
  //   star: 0,
  // });
  const [product, setProduct] = useState({});

  const [isActive, setActive] = useState("");
  const url = `https://iconixnepal.com/product/singleProduct?id=${_id}`;
  const [open, setOpen] = useState(false);
  const [disProdRev, setProdRev] = useState(false);
  const [rate, setRate] = useState(0);
  const [com, setComm] = useState("");
  const [buyNow, setBuyNow] = useState(false);
  const [activestep, setActiveStep] = useState(0);

  // const urlbase = "https://healthy-pear-sunglasses.cyclic.app/api";
  // const urlbase = "https://ecom-nczu.onrender.com/api";
  const urlbase = "http://localhost:8000/api";

  useEffect(() => {
    const fetchData = async () => {
      console.log(_id);
      try {
        const newItem = await axios.get(
          `${urlbase}/products/singleProduct/${_id}`
        );
        if (newItem.data) {
          console.log(newItem.data);
          setProduct(newItem.data);
          setActive(newItem.data.img[0]);

          console.log("this is item", newItem.data);
        }
      } catch (error) {
        console.log("error in fetching");
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleAddtoCart = async () => {
    if (Object.keys(user).length > 0) {
      try {
        const newUser = await axios.post(
          `${urlbase}/users/add/${user.phone}/${_id}/cart/${size}`
        );

        setUser(newUser.data);
        toast.success("Successfully added to cart!");
      } catch (error) {
        toast.error("Error in adding to cart!");
        console.log(error);
      }
    } else {
      history("/login");
    }
  };
  const handleCommentSubmit = async () => {
    console.log(com);
    try {
      axios
        .get(`${urlbase}/product/rating?id=${_id}&num=${rate}`)
        .then((data) => console.log(data.data))
        .catch((err) => console.log(err));
      const data = await axios.get(
        `${urlbase}/products/addComment?id=${_id}&comm=${com}`
      );
      console.log(data.data);
      setProduct(data.data);
      setComm("");
      setRate(0);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddtoWishlist = async () => {
    if (Object.keys(user).length > 0) {
      try {
        const newUser = await axios.post(
          `${urlbase}/users/add/${user.phone}/${_id}/wihlist/${size}`
        );
        console.log(newUser.data);
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
  const handleBuyNow = () => {
    setBuyNow(!Buynow);
  };
  return (
    <>
      {buyNow == true ? (
        <Buynow />
      ) : (
        <div className="product-detail">
          <Toaster />
          {product && Object.keys(product).length > 0 ? (
            <>
              <div className="product-image">
                <div className="allimages">
                  {product.img.map((productImages) => (
                    <div
                      key={productImages}
                      onClick={() => setActive(productImages)}
                    >
                      <img src={productImages} alt="Product Images" />
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
                          backgroundColor: "rgb(206, 205, 205)",
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
                  {/* <CopyToClipboard text={url}>
                    <div className="share-pd">
                      <RWebShare>
                        <ShareIcon
                          sx={{
                            outlineColor: "black",
                            fontSize: "2rem",
                          }}
                          onClick={() => {
                            setOpen(true);
                          }}
                        />
                      </RWebShare>
                    </div>
                  </CopyToClipboard> */}
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
                <div className="item-button-pd">
                  {/* <Button
                  
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                      outlineColor: "black",
                    }}
                    onClick={() => setBuyNow(true)}
                  >
                    BUY NOW
                  </Button> */}

                  {/* <Dialog
                    open={open}
                    onClose={() => {
                      setOpen(false);
                    }}
                    aria-labelledby="dialog-title"
                    aria-describedby="dialog-description"
                  >
                    <DialogTitle id="dialog-title">
                      Link copied to Clipboard!
                    </DialogTitle>

                    <DialogContent>
                      <DialogContentText id="dialog-description">
                        Now share it with your friends.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        OK
                      </Button>
                    </DialogActions>
                  </Dialog> */}
                </div>
                <p className="item-description">{product.desc}</p>
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
                          onKeyUp={(e) => {
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
            </>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      )}
    </>
  );
};

export default ProductDetails;
