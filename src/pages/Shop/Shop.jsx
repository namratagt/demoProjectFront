import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/productCard";
import { Link } from "react-router-dom";
import "./shop.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
const Shop = ({ productData, setProductData, user, setUser }) => {
  // const urlbase = "https://healthy-pear-sunglasses.cyclic.app/api";
  // const urlbase = "https://ecom-nczu.onrender.com/api";
  const urlbase = "http://localhost:8000/api/";

  const handelFilter = async (e) => {
    const temp = productData;
    const term = e.target.innerHTML;
    const { data } = await axios.get(
      `${urlbase}/products/filter?filter=${term}`
    );
    setProductData(data.length > 0 ? data : temp);
  };

  const [category, setCategory] = useState("");

  const handlecategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const [size, setSize] = useState("");

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const [price, setPrice] = useState("");

  const handlePriceRange = (event) => {
    setPrice(event.target.value);
  };
  const [sorting, setsorting] = useState("");
  const handleSorting = () => {};
  return (
    <div className="Shop-main">
      {productData.length > 0 ? (
        <>
          <div className="filter-bar">
            <div className="categories">
              <span
                onClick={() => {
                  axios
                    .get("http://localhost:8000/api/products")
                    .then((res) => setProductData(res.data))
                    .catch((err) => console.log(err));
                }}
              >
                All
              </span>
              <span onClick={handelFilter}>Winter</span>
              <span onClick={handelFilter}>Tops</span>
              <span onClick={handelFilter}>Bottoms</span>
              <span onClick={handelFilter}>Dresses</span>
              <span onClick={handelFilter}>Ethnic</span>
              <span onClick={handelFilter}>Sarees</span>
            </div>
            <div className="sorting">
              <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                <InputLabel sx={{}} id="demo-select-small-label">
                  Size
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={size}
                  label="Size"
                  onChange={handleSizeChange}
                >
                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${urlbase}/products`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value="None"
                  >
                    <em>None</em>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${urlbase}products/size?size=xs`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"xs"}
                  >
                    XS
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${urlbase}products/size?size=s`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"s"}
                  >
                    S
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${urlbase}products/size?size=m`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"m"}
                  >
                    M
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${urlbase}products/size?size=l`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"l"}
                  >
                    L
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${urlbase}products/size?size=xl`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"xl"}
                  >
                    XL
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${urlbase}products/size?size=xxl`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"xxl"}
                  >
                    XXL
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                <InputLabel id="demo-select-small-label">Price</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={price}
                  label="Price Range"
                  onChange={handlePriceRange}
                >
                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${urlbase}products`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value="None"
                  >
                    <em>None</em>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${urlbase}products/price?range=500`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"500"}
                  >
                    {" "}
                    Under 500
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${urlbase}products/price?range=1000`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"1000"}
                  >
                    {" "}
                    Under 1000
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      axios
                        .get(`${urlbase}products/price?range=2000`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"2000"}
                  >
                    {" "}
                    Under 2000
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                <InputLabel id="demo-select-small-label">Sort</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={sorting}
                  label="Sorting"
                  onChange={handleSorting}
                >
                  <MenuItem
                    onClick={() => {
                      setsorting("None");
                      axios
                        .get(`${urlbase}products`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"None"}
                  >
                    {" "}
                    <em>None</em>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setsorting("Ascending");

                      axios
                        .get(`${urlbase}products/sort?sortType=asce`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"Ascending"}
                  >
                    {" "}
                    Price Low to High
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setsorting("Descending");
                      axios
                        .get(`${urlbase}products/sort?sortType=tyiie`)
                        .then((res) => setProductData(res.data))
                        .catch((err) => console.log(err));
                    }}
                    value={"Descending"}
                  >
                    {" "}
                    Price High to Low
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="container-shop">
            {productData.map((product) => (
              <Link
                to={`/product/singleProduct/${product.id}`}
                key={product.id}
              >
                <div className="shop-item">
                  <ProductCard
                    product={product}
                    user={user}
                    setUser={setUser}
                  />
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <h1>
          <LoadingButton />
        </h1>
      )}
    </div>
  );
};

export default Shop;
