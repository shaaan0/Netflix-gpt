import React from "react";
import Login from "../LoginPage";
import Browse from "../Browse/index";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import DefaultPage from "../DefaultPage";
import NotFound from "../NotFound";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../utils/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../../utils/firebase";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/",
      element: <DefaultPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
