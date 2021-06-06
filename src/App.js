import PropTypes from "prop-types";
import React from "react";

class App extends React.Component{
    state = {
        count :0
    };
    add = () => {
        console.log("add");
    };
    del = () => {
        console.log("del");
    }

    render () {
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.del}>Del</button>
            </div>
        );
    }
}

export default App;
