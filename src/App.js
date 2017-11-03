import React, { Component } from 'react';
import './App.css';
import DishList from './Components/DishList/DishList';
import StaffList from './Components/StaffList/StaffList';
import LunchDishList from './Components/LunchDishList/LunchDishList';
import DinnerDishList from './Components/DinnerDishList/DinnerDishList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-md-6">
          <LunchDishList />
          <DinnerDishList />
        </div>

        <div className="col-md-5">
          <StaffList />
        </div>

      </div>
    );
  }
}

export default App;
