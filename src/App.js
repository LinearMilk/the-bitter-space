import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import InfoAndHistory from './Components/InfoAndHistory/InfoAndHistory';
import LunchDishList from './Components/LunchDishList/LunchDishList';
import DinnerDishList from './Components/DinnerDishList/DinnerDishList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/history" component={InfoAndHistory}/>
            <Route path="/intergalactic/history" component={InfoAndHistory}/>
            <Route path="/lunch" component={LunchDishList}/>
            <Route path="/intergalactic/lunch" component={LunchDishList}/>
            <Route path="/dinner" component={DinnerDishList}/>
            <Route path="/intergalactic/dinner" component={DinnerDishList}/>
            <Route exact path="*" component={Main}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
