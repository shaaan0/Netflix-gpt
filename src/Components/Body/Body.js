import React from "react";
import Login from "../LoginPage";
import Browse from "../Browse/index";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import App from "../../App";
import NotFound from "../NotFound";
import DefaultPage from "../DefaultPage";

const Body = () => {
  
  return (
      <RouterProvider router={appRouter} />
    
  );
};

export default Body;

export const appRouter = createBrowserRouter([
    // {
        // path: "/",
        // element: <App />,
        // children: [
            { path: "browse", element: <Browse /> },
          { path: "login", element: <Login /> },
          { path: "/", element: <DefaultPage /> },

        // ],
    //   },
      { path: "*", element: <NotFound /> },
  ]);
