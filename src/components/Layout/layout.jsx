import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./layout.css";

const Layout = ({ children, productData, setProductData }) => {
  return (
    <div>
      <Header productData={productData} setProductData={setProductData} />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
