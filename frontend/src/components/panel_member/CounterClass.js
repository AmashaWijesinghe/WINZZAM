import React from "react";
import { Component } from "react";

class CounterClass extends React.Component{
    constructor(){
        super();
        this.AddNo = this.AddNo.bind(this)
        this.state = {
            number:0
        }
    }

    AddNo(){
        this.setState({
            number:this.state.number+1
        })
    }

    render(){
        return(
            <div>
                <h3>Class Componenet</h3>
                <h1>Counter = {this.state.number}</h1>
                <button onClick={this.AddNo}>Increment</button>
            </div>
        )
    }
}

export default CounterClass;