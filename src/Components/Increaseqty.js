import React, { Component } from 'react'
import Showqty from './Showqty'

export default class Increaseqty extends Component {
    constructor(props) {
        super(props)
    
        // this.state = {
        //      qty:0
        // }
        this.qtyref=React.createRef()
    }
    qtyHandler=()=>{
        // this.setState({
        //     qty:this.state.qty+1
        // })
        this.qtyref.current.value++
    }
    // componentDidMount(){
    //     this.qtyref.current.focus()
    // }
    render() {
        return (
            <div>
            <div className="input-group">
                    {/* <input type="text" className="form-control" value={this.state.qty}/> */}
                    <input type="text" className="form-control" ref={this.qtyref}/>
                    <button type="button" className="btn btn-primary" onClick={this.qtyHandler}>+</button>
               <br/> </div>
               <Showqty innerRef={this.qtyref}/>
               </div>
        )
    }
}
