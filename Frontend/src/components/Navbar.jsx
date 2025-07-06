import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <span></span>
            <h1>Trio Vibe Beach Restuarent</h1>
          </div>
            <nav>
                <link to="home" 
                    spy={true} 
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    >
              Home
            </link>
                <link to="dishes" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                    className="cursor-pointer">
              Dishes
            </link>
                <link to="about" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                    className="cursor-pointer">
              About
            </link>
                <link to="menu" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                    className="cursor-pointer">
              Menu
            </link>
                <link to="reviews" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                    className="cursor-pointer">
              Reviews
            </link>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
