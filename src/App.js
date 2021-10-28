import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/About">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            




            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
