import React, { Component } from 'react'

export default class CountChar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:'',
             maxlength:50
        }
    }
    countchar(event){
        // console.log(event)
        this.setState({
            count:event.length,
            maxlength:this.state.maxlength-event.length
        })
    }
    render() {
        return (
            <div>
                <input type="text" onChange={(e)=>this.countchar(e.target.value)}/>
                <p>Count:{this.state.count}<br/>
                   Total Char to insert in textbox:{this.state.maxlength} </p>
            </div>
        )
    }
}
