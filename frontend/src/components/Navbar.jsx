import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IMAGES from '../images/Images'


export const Navbar = () => {
  return (
    <>
      
        {/* <nav>
            <a href="/">PROVIDERS</a>
            <a href="/">HELP</a>
            <a href="/">FAQ</a>
        </nav> */}

        <nav className="navbar">

          <div className="nav-in" id="navbarSupportedContent">
            <div className="logo">
              <img src={IMAGES.logo} alt="" srcset="" />
            </div>
            <ul className="ulauto">
              <li className="nitem">
                <a className="nlink" href="#">PROVIDERS</a>
              </li>
              <li className="nitem">
                <a className="nlink" href="#">HELP</a>
              </li>
              <li className="nitem">
                <a className="nlink" href="#">FAQ</a>
              </li>
              
            </ul>
            
          </div>
        </nav>


    </>
  );
};

export default Navbar;
