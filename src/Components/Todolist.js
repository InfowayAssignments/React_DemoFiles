import axios from 'axios'
import React, { Component } from 'react'

export default class Todolist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:[],errmsg:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{
            console.log(res)
            this.setState({list:res.data})  //list is array of objects (200 objects)
        })
        .catch(error=>{console.log(error)
            this.setState({errmsg:"Something went wrong"})
        })
    }
    render() {
        return (
            <>
                <h1>ToDo  List</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th><th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                            {
                                this.state.list.map(li=>
                                       <tr key={li.id}>
                                           <td>{li.id}</td>
                                           <td>{li.title}</td>
                                        </tr> 
                                    )
                            }
                      
                    </tbody>
                </table>
                {this.state.errmsg}
            </>
        )
    }
}

