import React from 'react';
import PropTypes from 'prop-types'

class HeroName extends React.Component{
    render(){
        return <h3>{this.props.name} {this.props.className}</h3>
    }
}

HeroName.propTypes = {
    name: PropTypes.string
}

export default class Hero extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "Iron Man"
        }
    }

    render(){
        return <HeroName name={this.state.name} className="section" />
    }
}