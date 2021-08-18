import React, { Component } from 'react'

export default class AddEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
             employee:{
                 Id:'',Name:'',Email:'',Salary:''
             }
        }}
    changeHandler=(event)=>{
        const name=event.target.name
        const value=event.target.value
        this.setState({
            employee:{
                ...this.state.employee,
                [name]:[value]
            }
        })
    }
    onCreateEmployee=(event)=>{
        console.log(this.state.employee)
        event.preventDefault()
    }
    render() {
        return (
            <div className="container">
              <h1>Add Employee</h1>
              <div className="col-6">
                  <form>
                      <label>Employee ID</label>
                      <input type="text" name="Id" className="form-control" 
                      value={this.state.employee.Id} onChange={this.changeHandler}/>
                      <label>Employee Name</label>
                      <input type="text" name="Name" className="form-control" 
                      value={this.state.employee.Name} onChange={this.changeHandler}/>
                      <label>Employee Email</label>
                      <input type="text" name="Email" className="form-control" 
                      value={this.state.employee.Email} onChange={this.changeHandler}/>
                      <label>Employee Salary</label>
                      <input type="text" name="Salary" className="form-control" 
                      value={this.state.employee.Salary} onChange={this.changeHandler}/><br/>
                      <button className="btn btn-primary" onClick={this.onCreateEmployee}>Create Employee</button>
                  </form>
              </div>
            </div>
        )
    }
}
