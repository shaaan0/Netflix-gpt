import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../utils/firebase";


export const Header = ({ width = "w-48" }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="flex justify-between w-full mr-auto ">
      <div>
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          className={width}
          alt="netflix-logo"
        />
      </div>
      {user ? (
        <div className="flex justify-between gap-5">
          <img
            className=" my-4 rounded-md h-10 w-10"
            alt="userIcon"
            src={user?.photoURL}
          />
          <Link to="/login">
            <button
              className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded my-4 sign-in-button"
              onClick={handleSignout}
            >
              Sign Out
            </button>
          </Link>
        </div>
      ) : !(location.pathname.includes("login"))? (
        <Link to="/login">
          <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded my-4 sign-in-button">
            Sign In
          </button>
        </Link>
      ): null}
    </div>
  );
};
