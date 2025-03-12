import "./App.css";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div >
      <Outlet />
    </div>
  );
}

export default App;
