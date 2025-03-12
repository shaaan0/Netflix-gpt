import React from "react";
import Header from "../Header";
import "./Login.css";
import { useState } from "react";

export const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div className=" relative login-page">
      <img
        className=" absolute login-page-image -z-10 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" h-screen">
          <div className="flex justify-between">
            <Header />
          </div>
          <div className="m-28"  >
            
            <form className="login-form flex flex-col gap-2 mx-auto max-w-md w-full sm:max-w-md md:max-w-md  lg:max-w-md bg-black bg-opacity-80 rounded p-8">
            <h1 className="text-3xl font-bold text-white leading-tight pb-4 m-2">
              {isSignInForm ? "Sign In" : "Sign Up"}
              </h1>
              {!isSignInForm && (
                <input
                  type="text"
                  placeholder="Name"
                  className="p-4 m-2 bg-gray-900 bg-opacity-80 text-slate-200 rounded-md text-white"
                />
              )}
              <input
                type="text"
                placeholder="Email or phone number"
                className="p-4 m-2 bg-gray-900 bg-opacity-80 text-slate-200 rounded-md text-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-4 m-2 bg-gray-900 bg-opacity-80 border-white rounded-md text-white"
              />
              <button className="bg-red-700 hover:bg-red-800 text-white font-bold  p-2 m-2 rounded my-5 sign-in-button">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              <p className="text-white">{isSignInForm? "New to Netflix?": "Already have an account?"}  
                <a href="#" onClick={toggleSignInForm} className="text-white font-semibold"> {isSignInForm? "Sign up ":"Sign in "}now.</a>
                </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
