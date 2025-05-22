// class component
// function component

import React, { use, useState } from "react";
import UserInfo from "./UserInfo"
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {
//   state = {
//     listUser: [
//       { id: 1, name: "me", age: "26" },
//       { id: 2, name: "B", age: "7" },
//       { id: 3, name: "me", age: "29" }
//     ]
//   }

//   onChangeListUser = (user) => {
//     let newListUser = [user, ...this.state.listUser]
//     this.setState({
//       listUser: newListUser
//     })
//   }

//   handleDeleteUser = (userId) => {
//     let listUsersClone = [...this.state.listUser]
//     listUsersClone = listUsersClone.filter(item => item.id !== userId)
//     this.setState({
//       listUser: listUsersClone
//     })
//   }

//   render() {
//     return (
//       <div>
//         <UserInfo onChangeListUser={this.onChangeListUser}></UserInfo>
//         <br />
//         <DisplayInfo
//           listUser={this.state.listUser}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </div>
//     );
//   }
// }

const MyComponent = () => {
  const [listUser, setListUser] = useState([
    { id: 1, name: "me", age: "26" },
    { id: 2, name: "B", age: "7" },
    { id: 3, name: "me", age: "29" }
  ])

  const onChangeListUser = (user) => {
    let newListUser = [user, ...listUser]
    setListUser(newListUser)
  }

  const handleDeleteUser = (userId) => {
    let listUsersClone = [...listUser]
    listUsersClone = listUsersClone.filter(item => item.id !== userId)
    setListUser(listUsersClone)
  }

  return (
    <div>
      <UserInfo onChangeListUser={onChangeListUser}></UserInfo>
      <br />
      <DisplayInfo
        listUser={listUser}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  );
}

export default MyComponent;