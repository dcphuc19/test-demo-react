import React from "react";

class UserInfo extends React.Component {
    state = {
        name: 'me',
        address: 'earth',
        age: 26
    };

    handleClick(event) {
        this.setState({
            name: "ares"
        })
    }

    handleOnChangeInput(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit(event) {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and Im from {this.state.address}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => {
                            this.handleOnChangeInput(event)
                        }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default UserInfo;