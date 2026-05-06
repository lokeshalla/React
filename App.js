import React from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML like or XML like syntax

const jsxHeading = (
  <>
    <h1 id="jsx-heading">Hello World from JSX</h1>
    <h2>Sub Heading</h2>
  </>
);
// Function Declaration
function Heading1() {
  return (
    <div>
      <h1>This is Component 1</h1>
    </div>
  );
}
// Arrow Function
const Heading2 = () => {
  return (
    <div>
      <h1>This is Component 2</h1>
    </div>
  );
};
// You can also write Arrow Function without return statement
// If there is only one statement
const Heading3 = () => (
  <div>
    <h1>This is Component 3</h1>
  </div>
);

const Heading4 = () => <h1>This is Component 4</h1>;

const Heading5 = () => {
  return <h1>This is Component 5</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Heading1 />
    <Heading2 />
    <Heading3 />
  </>,
);
