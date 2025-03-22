import React from "react";
import Login from "../LoginPage";
import Browse from "../Browse/index";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import DefaultPage from "../DefaultPage";

const Body = () => {
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
    }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
