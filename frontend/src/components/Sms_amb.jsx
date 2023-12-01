import React from "react";
import IMAGES from "../images/Images";
import "bootstrap/dist/css/bootstrap.min.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

// fontawesome.library.add(faCheckSquare, faCoffee);
import { useEffect, useState } from "react";

// const twilio = require('twilio')
// const dotenv = require('dotenv')
// import { Twilio } from 'twilio';


export const Sms_amb = () => {  

  return (
    <>
      <br></br>
      <div className="amb-section">
        <div className="book_statement">
          <p>
            NO INTERNET<br></br>
            FRET NOT !<br></br>
            QUICKLINE HAS GOT YOUR BACK !!
          </p>
        </div>
        <div className="book_description">
          <p>
            QUICKLINE OFFERS AMBULANCE BOOKING SERVICES EVEN IN WEAK NETWORK
            AREAS
          </p>
          <p>ENTER YOUR ADDRESS BELOW MANUALLY:</p>
        </div>

        <form action="" method="post">
          <label htmlFor="">House No.</label>
          <div className="input-group input-wrapper">
            <input
              placeholder="Enter Your House No."
              type="text"
              name=""
              id=""
            />
          </div>
          <br></br>
          <label htmlFor="">Street Area Locality</label>
          <div className="input-group input-wrapper">
            <input
              placeholder="Enter Your Street Area Locality"
              type="text"
              name=""
              id=""
            />
          </div>
          <br></br>
          <label htmlFor="">Landmark(Optional)</label>
          <div className="input-group input-wrapper">
            <input
              placeholder="Enter Your Nearest Landmark"
              type="text"
              name=""
              id=""
            />
          </div>
          <br></br>
          <label htmlFor="">Pincode</label>
          <div className="input-group input-wrapper">
            <input placeholder="Enter Your Pincode" type="text" name="" id="" />
          </div>
          <br></br>
          
          <label htmlFor="">Contact No.</label>
          <div className="input-group input-wrapper">
            <input
              placeholder="Enter Your Contact Number"
              type="text"
              name=""
              id=""
              
            />
          </div>

          <br></br>
          <label htmlFor="">Enter Address Of Destination.</label>
          <div className="input-group input-wrapper">
            <input
              placeholder="Enter Address of Destination"
              type="text"
              name=""
              id=""
            />
          </div>
          <br></br>
          <label htmlFor="">Pincode Of Destination</label>
          <div className="input-group input-wrapper">
            <input
              placeholder="Enter Pincode of Destination"
              type="text"
              name=""
              id=""
            />
          </div>
          <br></br>
          <div className="search-btn">
            <button type="submit" className="search-amb">
              Send SMS
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Sms_amb;
