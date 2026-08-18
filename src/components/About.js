import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <div className="flex justify-between bg-amber-100 m-20 border border-gray-300 rounded-2xl w-160 p-5">
          <User />
          <UserClass />
        </div>
      </>
    );
  }
}

export default About;
