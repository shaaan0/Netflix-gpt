import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import "./DefaultPage.css";

const DefaultPage = () => {
  return (
    <div className=" default-page">
      <img
        className="default-page-image"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" h-screen">
          <div className="flex justify-between">
            <Header />
            <Link to="/login">
              <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded my-5 sign-in-button">
                Sign In
              </button>
            </Link>
          </div>
          <div className="default-page-content flex flex-col items-center justify-center text-white mx-auto">
            <h1 className="text-6xl font-extrabold text-center leading-tight">
              Unlimited movies, TV shows and more
            </h1>
            <h4 className="text-xl font-semibold text-center leading-tight mt-5">
              Starts at $2. Cancel at any time.
            </h4>

            <h4 className="text-lg font-semibold text-center leading-tight mt-5">
              Ready to watch? Enter you email to create or restart your
              membership.
            </h4>
            <div className="flex items-center justify-stretch w-full">
              <input
                className="email-input"
                type="text"
                placeholder="Email address"
              />
              <button className="bg-red-700 hover:bg-red-800  text-white font-bold get-started-button">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DefaultPage;
