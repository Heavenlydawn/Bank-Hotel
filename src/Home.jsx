import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import Star8 from "./images/Star 8.png";
import ButtonDefault from "./images/button - default.png";
import CoverImg from "./images/CoverImg.png";
import Vector from "./images/Vector 4.svg";

const Home = () => {
  return (
    <div id="container overflow-x-clip">
      <div id="HeroSection" className="HeroSection flex">
        <header className="mx-8 w-screen">
          <nav className="w-full flex justify-between align-center my-5 ">
            <h2 className="font-bold">BankHotel</h2>
            <ul className="flex">
              <li>
                <NavLink to="/home">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/room">ROOMS</NavLink>
              </li>
              <li>
                <NavLink to="/restaurant">RESTAURANT</NavLink>
              </li>
              <li>
                <NavLink to="/conHall">CONFERENCE HALL</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACTS</NavLink>
              </li>
            </ul>
            <h4>+38 032 297 50 20</h4>
          </nav>

          <div className="HeroSection-2 flex justify-between mt-20">
            <h1 className="font-600 text-8xl">
              Bank<span>Hotel</span>
            </h1>
            <div className="flex justify-around align-center gap-x-44">
              <button className="Star">
                <img className="mx-5" alt="Star-Icon" src={Star8} /> Since 1973
              </button>
              <img className="Default-btn" alt="button" src={ButtonDefault} />
            </div>
          </div>
          {/* Hotel listing */}
          <div className="hotelSections my-5">
            <div className="flex justify-between">
              <p>
                <span>ROOMS // RESTAURANT // CONGRESS HALL // WINE BAR</span>
              </p>
              <p className="info w-80">
                The luxurious hotel in the most beautiful European city with an
                exclusive restaurant, conference-hall, and art-bar.
              </p>
            </div>
          </div>
        </header>
      </div>
      {/* Hero Image Section */}
      <div className="Img-container">
        <img className="CoverImg" alt="coverImage" src={CoverImg} />
        <div className="btn">
          <div>
            <button>
              CHECK IN <img id="ci" alt="arrow-direction-down" src={Vector} />
            </button>
          </div>
          <div>
            <button>
              CHECK OUT <img id="co" alt="arrow-direction-down" src={Vector} />
            </button>
          </div>
          <div className="br">
            <button>BOOK ROOMS</button>
          </div>
        </div>
      </div>
      {/* contact with address */}
      <div id="x">
        <div className="con flex justify-between px-10 text-white text-2xl mb-5">
          <p className="text-amber-400">
            <u>+38 032 297 50 20</u>
          </p>
          <p>ART & CONGRESS</p>
        </div>

        <div className="flex justify-between text-xl">
          <p className="text-white px-10">
            <u>8 LYSTOPADOVOHO CHYNU,LVIV</u>
          </p>
          <p className="text-white px-10">
            <em>HALL</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
