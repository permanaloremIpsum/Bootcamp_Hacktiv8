import React, { useState } from 'react';
import PropTypes from 'prop-types'

function HeroName(props){
    return(
        <h3>{props.name} {props.className}</h3>
    )
}

HeroName.propTypes = {
    name: PropTypes.string
}

function Hero(){
    const [name, setName] = useState('Iron Man')
    let changeHero = () => {
        setName("Captain America")
    }
    return(
        <div>
            <HeroName name={name} />
            <button onClick={() => changeHero() }>Change Hero</button>
        </div>
    )
}

export default Hero;