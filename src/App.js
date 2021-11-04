import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Services from './Components/Home/Services/Services';
import Header from './Components/Shared/Header';
import Login from './Components/Login/Login/Login';
import AddFood from './Components/Home/AddFood/AddFood';
import Details from './Components/Details/Details';
import MyOrder from './Components/Home/MyOrder/MyOrder';
import AuthProvides from './Contexts/AuthProvides';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import ManageOrder from './Components/Home/ManageOrder/ManageOrder';
import Footer from './Components/Home/Footer/Footer';
import About from './Components/Home/About/About';
import Contact from './Components/Home/Contact/Contact';
import Notfound from './Components/Home/Home/Notfound/Notfound';
function App() {
  return (
    <div className="App">
      <AuthProvides>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
          <Home/>
          </Route>
          <Route path="/services">
          <Services/>
          </Route>
              <PrivateRoute path="/addfood">
              <AddFood/>
                </PrivateRoute> 
              <PrivateRoute path="/manageorder">
              <ManageOrder/>
                </PrivateRoute> 
         <PrivateRoute path="/details/:id">
          <Details/>
            </PrivateRoute> 
          <Route path="/myorder">
          <MyOrder/>
            </Route>
          <Route path="/aboutus">
          <About/>
            </Route>
          <Route path="/contact">
          <Contact/>
            </Route>
          <Route path="/login">
            <Login/>
            </Route>
            <Route path="*">
            <Notfound/>
          </Route>
          </Switch>
          
        </Router>
        <Footer/>
      </AuthProvides>
    </div>
  );
}

export default App;
