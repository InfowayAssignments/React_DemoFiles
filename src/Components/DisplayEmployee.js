import react,{Component} from "react";
import reactDom from "react-dom";
import Department from './Department'
import SalaryEmployee from "./SalaryEmployee";
class DisplayEmployee extends Component{ 
    constructor(props){
        super(props)
        // this.state={ counter:0}
        this.state={
            updatesal:this.props.Totalsalary
        }
    }
    // clickhandler=()=>{
    //     alert("this is click event")
    // }
    // counthandler=()=>{
        // alert(this.state.counter++)
        // this.setState({
        //     counter:this.state.counter+1
        // })    
    // }
    getupdatedsal=(sal)=>{
        this.setState({updatesal:sal})
    }
    render(){
        return( <div>
                    {/* <p>This is Display Employee Class Component</p>
                    EmpID={this.props.empid}<br/>
                    Empname={this.props.name}<br/> */}
                   {/* <Department Id="1101" Name="Sales"/> */}
                   {/* <button className="btn btn-success" onClick={this.clickhandler}>Click Me</button> */}
                   {/* <button className="btn btn-success" onClick={this.counthandler}>Count</button>
                   {this.state.counter} */}

                   <h1>Employee Data</h1>
                   <table style={{border:'1px solid blue'}}>
                       <tr>
                           <thead>
                           <th>ID</th>
                           <th>Name</th>
                           <th>Total Salary</th>
                           </thead>
                           <tbody>
                               <tr>
                                   <td>{this.props.empid}</td>
                                   <td>{this.props.name}</td>
                                   <td>{this.state.updatesal}</td>
                               </tr>
                           </tbody>
                       </tr>
                   </table><br/>
                   <SalaryEmployee BasicSalary={this.props.Basic} HRA={this.props.HRA} 
                   DA={this.props.DA}  onSalChange={this.getupdatedsal}/>
                </div>
             )
        }
}
export default DisplayEmployee