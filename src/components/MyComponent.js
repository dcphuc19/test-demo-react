// class component
// function component

import React from "react";
import UserInfo from "./UserInfo"
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "me", age: "26" },
      { id: 2, name: "B", age: "27" },
      { id: 3, name: "me", age: "29" }
    ]
  }
  render() {
    return (
      <div>
        <DisplayInfo listUser={this.state.listUser} />
      </div>
    );
  }
}

export default MyComponent;