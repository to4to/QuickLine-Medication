import React from "react";
import IMAGES from '../images/Images'
import "bootstrap/dist/css/bootstrap.min.css";
import Book_amb from "../components/Book_amb";
import Sms_amb from "../components/sms_amb";
import Map_amb from "../components/Map_amb";

export const Ambulance = () => {
  return (
    <>

    <div className="section">
      <div className="inner-section">

        <Book_amb />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Map_amb />
      </div>

      <Sms_amb />


    </div>
      




    </>
  );
};

export default Ambulance;
