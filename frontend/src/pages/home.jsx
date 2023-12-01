import React from "react";
import IMAGES from "../images/Images";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      {/* <h1>this is home page(main index page)</h1>
        <a href="/ambulance">Click here for Ambulance</a> */}

      <div className="app-sec">
        <div className="first-sec">
          <Link to="/ambulance">
            <div className="in-sec">
              <img src={IMAGES.ambulance} alt="" srcset="" />
              <p>5 MIN AMBULANCE</p>
            </div>
          </Link>

          <Link to="/pharmacy">
            <div className="in-sec">
              <img src={IMAGES.pharmacy} alt="" srcset="" />
              <p>INSTANT MEDICINE</p>
            </div>
          </Link>
        </div>
        <div className="first-sec">
          <Link to="/consult">
            <div className="in-sec">
              <img src={IMAGES.consult} alt="" srcset="" />
              <p>ONLINE DOCTOR CONSULTANCY</p>
            </div>
          </Link>
          <Link to="/mental_health">
            <div className="in-sec">
              <img src={IMAGES.mental_health} alt="" srcset="" />
              <p>MENTAL HEALTH FORUM</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
