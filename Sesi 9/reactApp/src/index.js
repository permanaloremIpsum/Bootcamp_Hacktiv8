import React from "react";
import ReactDOM from "react-dom";

const HelloWorld = () => {
    return(
        <h1>Hello, this is React with Webpack and Babel</h1>
    );
}

ReactDOM.render(<HelloWorld/>, document.querySelector('#root'))