import React from "react";

export default class ClassClock extends React.Component {
    constructor(){
        super()
        this.state = {
            date: new Date()
        }
    }

    thick = () => {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.thick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render(){
        return(
            <div className="ClassApp">
                <h1 className="text-white">Realtime CLOCK</h1>
                <p className="text-dark">Class Component</p>
                <hr/>
                <h1 className="text-white">{this.state.date.toLocaleTimeString()}</h1>
                <h1 className="text-white">{this.state.date.toLocaleDateString()}</h1>
            </div>
        )
    }
}