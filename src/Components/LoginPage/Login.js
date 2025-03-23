import React from "react";
import Header from "../Header";
import "./Login.css";
import { useState, useRef } from "react";
import { checkValidData } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";


// The Login component is a functional component that returns a JSX element.
// The component uses the useState and useRef hooks to manage state and create references to form inputs.
// The component also uses the useNavigate hook to navigate to different routes.
// The component uses the createUserWithEmailAndPassword and signInWithEmailAndPassword functions from the Firebase auth module to create and sign in users.
// The component uses the checkValidData function from the validate module to validate form data.

export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleButtonClick = (event) => {
    //validate form data
    event.preventDefault();

    let isValid = checkValidData(
      email.current.value,
      password.current.value,
      !isSignInForm ? name.current.value : "none"
    );
    setErrorMessage(isValid);
    if (isValid) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => userCredential.user)
        .then((user) => {
          return updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/40761730?v=4&size=64",
          });
        })
        .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
          console.log(errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode);
          console.log(errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className=" relative login-page">
      <img
        className=" absolute login-page-image -z-10 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
      />
      <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-8">
        <div className=" h-screen">
          <div className="flex justify-between">
            <Header />
          </div>
          <div className="m-28 mx-auto sm:w-96 md:w-96 lg:w-96">
            <form className="login-form flex flex-col gap-2 mx-auto bg-black bg-opacity-80 rounded p-8">
              <h1 className="text-3xl font-bold text-white leading-tight pb-4 m-2">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h1>
              {!isSignInForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Name"
                  className="p-4 m-2 bg-gray-900 bg-opacity-80 text-slate-200 rounded-md text-white"
                />
              )}
              <input
                ref={email}
                type="text"
                placeholder="Email or phone number"
                className="p-4 m-2 bg-gray-900 bg-opacity-80 text-slate-200 rounded-md text-white"
              />
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="p-4 m-2 bg-gray-900 bg-opacity-80 border-white rounded-md text-white"
              />
              <p className="text-red-700 px-4 m-2">{errorMessage}</p>
              <button
                onClick={handleButtonClick}
                className="bg-red-700 hover:bg-red-800 text-white font-bold  p-4 m-2 rounded my-5 sign-in-button"
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              <p className="text-white">
                {isSignInForm ? "New to Netflix?" : "Already have an account?"}
                <a
                  href="#"
                  onClick={toggleSignInForm}
                  className="text-white font-semibold"
                >
                  {" "}
                  {isSignInForm ? "Sign up " : "Sign in "}now.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
