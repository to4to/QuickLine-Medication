"use client"
import React from "react";
import { useState } from 'react'
import IMAGES from "../images/Images";
import "bootstrap/dist/css/bootstrap.min.css";
import searchAmb from "../pages/searchAmb";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

export const First_content = () => {
  
  return (
    <>
      
        <div className="content">
            <div className="fis">

                <h2>QUICKLINE MEDICATION</h2>
                <p>Healthcare at your fingertips</p>
                <p>We at quickline medication are 

                dedicated services right at your <br></br>

                doorstep<br></br>

                lorem ipsum dolor sit amet</p>
            </div>
            <div className="seco">
                <img src={IMAGES.first_img} alt="" srcset="" />
            </div>
        </div>
      

    </>
  );
};

export default First_content;
