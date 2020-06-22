import React, { Component } from 'react';


import { DISHES } from '../../shared/dishes'
import Dishdetail from '../DishdetailComponent';
import Menu from '../MenuComponent';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../HomeComponent';

class Main extends Component {

    constructor(props) {
      super(props);
      this.state = {
          dishes: DISHES
          
      };
    }
  
 
    render() {

      const HomePage = () => {
        return(
            <Home />
        );
      }
    
      return (
        <div>
         <HeaderComponent />

         <Switch>
         <Route path='/home' component={HomePage} />
         <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
         <Redirect to="/home" />
     </Switch>

        
          
          <FooterComponent />
        </div>
      );
    }
  }
  
  // <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
  // <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />

  export default Main;