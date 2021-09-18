import React, { useState } from "react";

function FunctionClock(){
    const [date, setDate] = useState(new Date())

    let tick = () => {
        setDate(new Date())
    }

    setInterval(() => tick(), 1000)

    return(
        <div className="FunctionApp">
            <h1 className="text-white">Realtime CLOCK</h1>
            <p className="text-dark">Functional Component</p>
            <hr/>
            <h1 className="text-white">{date.toLocaleTimeString()}</h1>
            <h1 className="text-white">{date.toLocaleDateString()}</h1>
        </div>
    )
}

export default FunctionClock