import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement() => JS Object => HTML Element(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React!"
);

const theme = React.createElement("button", { id: "btn" }, "");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
