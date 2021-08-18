import React, { Component } from 'react'

class SalaryEmployee extends Component {
    constructor(props) {
        super(props)
            this.state = {
             basic:this.props.BasicSalary,
             hra:this.props.HRA,
             da:this.props.DA
        }
    }
    updatesalHandler=()=>{
    //    alert(this.refs.basic.value)
        let totalsal= parseInt(this.refs.basic.value)+parseInt(this.refs.hra.value)
        +parseInt(this.refs.da.value)
        // alert(totalsal)
        this.props.onSalChange(totalsal)
    }
    render() {
        return (
            <div className="col-4">
             {/* <p>Basic Salary={this.props.BasicSalary}</p>
             <p>HRA={this.props.HRA}</p>
             <p>DA={this.props.DA}</p> */}
             <label>Basic Salary</label>
             <input type="text" className="form-control" defaultValue={this.state.basic} ref="basic"/><br/>
             <label>HRA</label>
             <input type="text" defaultValue={this.state.hra} className="form-control" ref="hra"/><br/>
             <label>DA</label>
             <input type="text" defaultValue={this.state.da} className="form-control" ref="da"/><br/>
             <button onClick={this.updatesalHandler} className="btn btn-primary">Update Salary</button>
            </div>
        )
    }
}

export default SalaryEmployee
