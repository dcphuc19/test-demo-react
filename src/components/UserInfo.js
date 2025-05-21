import React from "react";

class UserInfo extends React.Component {
    state = {
        name: '',
        address: 'earth',
        age: ''
    };

    handleOnChangeInput(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAgeInput(event) {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit(event) {
        event.preventDefault()
        this.props.onChangeListUser({
            id: Math.floor((Math.random90 * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    My name is {this.state.name}
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => {
                            this.handleOnChangeInput(event)
                        }}
                    />
                    My age is {this.state.age}
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => {
                            this.handleOnChangeAgeInput(event)
                        }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default UserInfo;