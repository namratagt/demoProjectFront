import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const { fetchProductDetails } = require("../../fetchDetails");

const About = () => {
  return (
    <div className="">
      <h1>Iconix Fashion</h1>
      <p>lorem ipsum</p>
      <Link to="/">
        <button>Let's Shop!</button>
      </Link>
    </div>
  );
};

export default About;
