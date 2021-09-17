import React from 'react';

export default class Users extends React.Component {
    constructor(){
        super()
        this.state = {
            username: 'user01'
        }
    }

    getUsername(){
        return this.state.username
    }

    setUsername = () => {
        this.setState({
            username: 'user99'
        })
    }

    resetUsername = () => {
        this.setState({
            username: 'user01'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.getUsername()}</h1>
                <br />
                <button onClick={this.setUsername}>Set Username</button>
                <button onClick={this.resetUsername}>Reset Username</button>
            </div>
        )
    }
}