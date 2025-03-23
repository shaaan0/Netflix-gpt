import React, { use } from "react";
import Header from "../Header";
import { Link, useNavigate  } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

export const Browse = () => {
  return (
    <div className=" default-page">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" h-screen">
          <div className="flex justify-between ">
            <div className="my-2 w-full">
              <Header width={"w-28"} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
