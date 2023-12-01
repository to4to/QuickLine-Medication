import React from "react";
import IMAGES from "../images/Images";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Map_amb from "../components/Map_amb";

export const searchAmb = () => {
  return (
    <>
      <h1>hey this is map page</h1>
      <Map_amb />
        
    </>
  );
};

export default searchAmb;
