import PropTypes from "prop-types";
import React from "react";

class App extends React.Component{
    state = {
        count :0
    };

    // this.setState({count:this.state.count + 1}); 로 카운트를 하는방식이 가능하지만
    // react 에서는 자신에게 있는 값을 current로 가져올 수 있다.
    add = () => {
        this.setState(current => ({count:current.count + 1}));
    };
    del = () => {
        this.setState(current => ({count:current.count - 1}));
    }

    componentDidMount() {
    console.log("Component rendered");
    }
    componentDidUpdate() {
    console.log("I just updated");
    }
    componentWillUnmount() {
    console.log("Goodbye, cruel world");
    }
      

    // App 클래스에 있는 add, del을 버튼에 이벤트로줌
    render () {
        console.log("I'm rendering");
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
