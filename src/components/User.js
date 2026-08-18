import { useState, useEffect } from "react";

const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("OP");
    }, 1000);
    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("useEffect return");
    };
  }, []);

  console.log("render");
  return (
    <div>
      <h2>Functional Component</h2>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>
    </div>
  );
};

export default User;
