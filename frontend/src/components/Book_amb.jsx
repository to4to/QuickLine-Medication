"use client"
import React from "react";
import { useState } from 'react'
import IMAGES from "../images/Images";
import "bootstrap/dist/css/bootstrap.min.css";
import searchAmb from "../pages/searchAmb";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

// fontawesome.library.add(faCheckSquare, faCoffee);

export const Book_amb = () => {
  // const [value, setValue] = useState(null);
  return (
    <>
      

      <div className="amb-section">
        <form action="" method="get">
          <label htmlFor="">Pickup Location</label>
          <div className="input-group input-wrapper">
            <span>
              <img src={IMAGES.image1} alt="" srcset="" />
            </span>
            <input
              placeholder="Enter Your Pickup Address Here"
              type="text"
              name=""
              id=""
            />
            {/* <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_NEXT_PUBLIC_GOOGLE_API_KEY}
              selectProps={{
                value,
                onChange: setValue,
              }}
            /> */}
          </div>
          <br></br>
          <label htmlFor="">Drop Location</label>
          <div className="input-group input-wrapper">
            <span>
              <img src={IMAGES.image2} alt="" srcset="" />
            </span>
            <input
              placeholder="Enter Your Destination Address Here"
              type="text"
              name=""
              id=""
            />
            {/* <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_NEXT_PUBLIC_GOOGLE_API_KEY}
              selectProps={{
                value,
                onChange: setValue,
              }}
            /> */}
          </div>

          <div className="search-btn">
            <button className="clock-btn border rounded p-1">
              <img src={IMAGES.image3} alt="" srcset="" />
            </button>
            <button className="search-amb" >
              Search Ambulance
            </button>
          </div>
          

          {/* <FontAwesomeIcon icon="check-square" /><br /><br />
          <FontAwesomeIcon icon="coffee" />
        <FontAwesomeIcon icon={faEnvelope} /> */}
        </form>
      </div>

    </>
  );
};

export default Book_amb;
