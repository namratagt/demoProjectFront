import React, { useEffect, useState } from "react";

import ProductCard from "../../components/productCard/productCard";
import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img4.jpg";
import img3 from "../../assets/img2.jpg";
const Home = ({ productData, setProductData, user, setUser }) => {
  let products = productData.slice(0, 10);

  return (
    <div className="home-main">
      {productData.length > 0 ? (
        <>
          <div className="home-carousel-image">
            <div className="home-carousel-image-item">
              <div className="home-carousel-image-wrapper">
                <img src={img1} alt="product" />
              </div>
              <div className="home-carousel-image-caption">
                <h1>Ethnic Collection</h1>
                <Link to="/shop">
                  <div className="home-carousel-image-button">SHOP NOW</div>
                </Link>
              </div>
            </div>
            <div className="home-carousel-image-item">
              <div className="home-carousel-image-wrapper">
                <img src={img2} alt="product" />
              </div>
              <div className="home-carousel-image-caption">
                <h1>Western Collection</h1>
                <Link to="/shop">
                  <div className="home-carousel-image-button">SHOP NOW</div>
                </Link>
              </div>
            </div>
            <div className="home-carousel-image-item">
              <div className="home-carousel-image-wrapper">
                <img src={img3} alt="product" />
              </div>
              <div className="home-carousel-image-caption">
                <h1>Festive Collection</h1>
                <Link to="/shop">
                  <div className="home-carousel-image-button">SHOP NOW</div>
                </Link>
              </div>
            </div>
          </div>

          <div className="fp">
            <h1 className="home-heading">Featured Products</h1>
            <div className="container-fp-home">
              {products.map((product) => (
                <div className="item-home-fp">
                  <ProductCard
                    product={product}
                    user={user}
                    setUser={setUser}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <h2>Loading..</h2>
      )}
    </div>
  );
};

export default Home;
