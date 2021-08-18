import axios from 'axios'
import React, { Component } from 'react'

export default class Todopost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                 title:''
        }
    }
    changeHandler=(event)=>{
        // const name=event.target.name
        // const value=event.target.value
        // this.setState({
        //     data:{
        //         ...this.state.data,
        //         [name]:[value]
        //     }
        // })
        this.setState({title:event.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(this.state.data)
        axios.post('https://jsonplaceholder.typicode.com/todos',this.state)
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
    }
    render() {
        return (
            <div className="m-5">
                <form onSubmit={this.handleSubmit}>
                    {/* <input type="text" name="userid" placeholder="userId" value={this.state.data.userid} onChange={this.changeHandler}/><br/>
                    <input type="text" name="id" placeholder="id" value={this.state.data.id} onChange={this.changeHandler}/><br/> */}
                   <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.changeHandler}/><br/>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}
