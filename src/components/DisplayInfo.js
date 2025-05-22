import React from "react";
import UserInfo from "./UserInfo";
import './DisplayInfo.scss'
import logo from './../logo.svg'

// class DisplayInfo extends React.Component {
//     state = {
//         isShow: true
//     }

//     handleShowHide = () => {
//         this.setState({
//             isShow: !this.state.isShow
//         }
//         )
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log(prevProps.listUser, this.props.listUser)
//         if (prevProps.listUser !== this.props.listUser)
//             console.log('>>>call me did update')
//     }

//     componentDidMount() {
//         console.log('>>> call me component did mount')
//     }

//     render() {
//         console.log('>>> render')
//         const { listUser } = this.props;
//         return (

//             <div className='display-info-container'>
//                 {/* <img src={logo} /> */}
//                 <span onClick={() => { this.handleShowHide() }}>{this.state.isShow ? "Hide list user: " : "Show list user:"}</span>

//                 {this.state.isShow &&
//                     <>
//                         {listUser.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>My name is {user.name}</div>
//                                     <div>My age is {user.age}</div>
//                                     <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>


//         )
//     }
// }

const DisplayInfo = (props) => {
    const { listUser } = props;
    return (
        <div className='display-info-container'>
            {true &&
                <>
                    {listUser.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>My name is {user.name}</div>
                                <div>My age is {user.age}</div>
                                <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>


    )
}

export default DisplayInfo;