import React, { Component } from 'react'

export default class Showqty extends Component {
    focusInput=()=>{
        this.props.innerRef.current.focus()
    }
    render() {
        return (
            <div>
               <h2 onClick={this.focusInput}> Quantity is 1</h2>
            </div>
        )
    }
}
