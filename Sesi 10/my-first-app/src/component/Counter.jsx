import React from "react";

export default class Counter extends React.Component {
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        if(this.state.counter <= 0){
            alert("Angka Tidak Boleh Minus!!!")
        }else{
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }

    render(){
        return(
            <div>
                <h2>{this.state.counter}</h2>
                <br />
                <button id="inc" onClick={this.increment}>+</button>
                <button id="dec" onClick={this.decrement}>-</button>
            </div>
        )
    }
}