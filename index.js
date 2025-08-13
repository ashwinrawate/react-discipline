import React from "react";
import { createRoot } from "react-dom/client";
const parentElement = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hi from child Element")
  )
);

const root = createRoot(document.getElementById("root"));
root.render(parentElement);
