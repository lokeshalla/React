import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/lokeshalla");
    const data = await response.json();
    this.setState({
      userInfo: data,
    });
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="git_avatar" src={avatar_url} />
        <h2>Class Based Component</h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @{login}</h4>
      </div>
    );
  }
}

export default UserClass;
