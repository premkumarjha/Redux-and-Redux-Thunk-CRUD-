import logo from './logo.svg';
import './App.css';
import Employee from './components/employee';
import Add from './components/addEmployee';
import AddUser from './components/addEmployee';
import EditUser from './components/editEmployee';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 

function App() {
  return (
   <Router>
     <Route exact path='/' component={Employee}>
     <Employee></Employee>
     </Route>

  <Route exact path='/aduser' component={AddUser}></Route>

  <Route exact path='/edituser/:id' component={EditUser}>
    {/* <EditUser></EditUser> */}
  </Route>
</Router>
  )
}

export default App;
