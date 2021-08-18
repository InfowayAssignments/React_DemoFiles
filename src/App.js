import './App.css';
import DisplayEmp from './Components/DisplayEmp';
import DisplayEmployee from './Components/DisplayEmployee';
import CountChar from "./Components/CountChar";
import TableFragment from './Components/TableFragment';
import AddEmployee from './Components/AddEmployee';
import EmpList from './Components/EmpList';
import FormusingFormik from './Components/FormusingFormik';
import Student from './Components/Student'
import ErrorBoundary from './Components/ErrorBoundary';
import { UserConsumer, UserProvider } from './Components/UserContext';
import { Component } from 'react';
import { NavLink, Route,Switch} from 'react-router-dom';
import Home from './Components/MyWebPage/Home'
import About from './Components/MyWebPage/About'
import Contact from './Components/MyWebPage/Contact'
import PageNotFound from './Components/MyWebPage/PageNotFound';
import Header from './Components/Header';
import Todolist from './Components/Todolist';
import Todopost from './Components/Todopost';
// import Increaseqty from './Components/Increaseqty'
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:{Id:101,Name:"Ram"}
    }
  }
  changeData=()=>{
    this.setState({
      data:{Id:102,Name:"Seeta"}
    })
  }
  render(){
  return (
    <div className="container mt-2">
      {/* <h1 className="text-primary">hello React</h1> */}
      {/* <DisplayEmp empid="101" name="Smith"/> */}
      {/* <DisplayEmployee empid="101" name="Smith" Totalsalary="30000" Basic="20000" HRA="4000"
       DA="6000"/> */}
      {/* <CountChar/> */}
      {/* <TableFragment/> */}
      {/* <AddEmployee/> */}
      {/* <EmpList/> */}

      {/* <FormusingFormik/> */}
      {/* <ErrorBoundary>
      <Student name="Infoway">
        <h1>gjjf</h1><h2>dfbmdf</h2>
      </Student>
      </ErrorBoundary>
      <Student name="IET"/>
      <Student name="acts"/>
      <Student name="Know-IT"/>
      <ErrorBoundary>
      <Student name="Joker"/>
        </ErrorBoundary> */}
        {/* <Increaseqty/> */}

        {/* <UserProvider value='Infoway'> */}
          {/* <TableFragment/> */}
        {/* </UserProvider> */}

        {/* <UserProvider value={this.state.data}>
          <TableFragment/>
        </UserProvider><br/>
        <button className="btn btn-primary" onClick={this.changeData}>Change Data</button> */}

        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <ul className="navbar navbar-nav">
            <li className="nav-item">
              <NavLink to="/Home" className="nav-link" activeClassName="text-info bg-warning">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About" className="nav-link" activeClassName="text-info bg-warning">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Contact" className="nav-link" activeClassName="text-info bg-warning">Contact</NavLink>
            </li>
          </ul>
        </nav> */}

        {/* <Header/>

        <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/Home/emp' component={AddEmployee}></Route>
        <Route component={PageNotFound}></Route>
        </Switch> */}
        <Todopost/>
        <Todolist/>
    </div>
  );
      }
}

export default App;
