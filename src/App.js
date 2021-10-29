import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login/Login';
import PrivetRoute from './Components/Login/PrivetRoute/PrivetRoute';
import Tours from './Components/Tours/Tours';

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
            <PrivetRoute path="/About">
              <About></About>
            </PrivetRoute>
            <PrivetRoute path="/Tours">
              <Tours></Tours>
            </PrivetRoute>
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
