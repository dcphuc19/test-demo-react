// class component
// function component

import React from "react";

class MyComponent extends React.Component{
    //JSX
    render(){
        return (
            <div>my first componet
                {Math.random()}
            </div>
        );
    }
}

export default MyComponent;