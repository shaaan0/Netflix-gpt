import "./styles.css";

import React from "react";
import { createRoot } from "react-dom/client";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <Body />
  </Provider>
);
