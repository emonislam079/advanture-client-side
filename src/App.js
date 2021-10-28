import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
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




            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
