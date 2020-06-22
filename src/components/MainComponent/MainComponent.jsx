import React, { Component } from 'react';


import { DISHES } from '../../shared/dishes'
import { COMMENTS } from '../../shared/comments'
import { LEADERS } from '../../shared/leaders'
import { PROMOTIONS } from '../../shared/promotions'
import Dishdetail from '../DishdetailComponent';
import Menu from '../MenuComponent';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../HomeComponent';
import Contact from '../ContactComponent';
//import About from '../AboutComponent';

class Main extends Component {

    constructor(props) {
      super(props);
      this.state = {
          dishes: DISHES,
          comments: COMMENTS,
          promotions: PROMOTIONS,
          leaders: LEADERS
          
      };
    }
  

   
 
    render() {

      const HomePage = () => {
        return(
            <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
      }
    
      const DishWithId= ({match}) =>{
       return( <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
        comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        leaders={this.state.leaders.filter((leader) => leader.dishId === parseInt(match.params.dishId,10))}
        />)
      }

      return (
        <div>
         <HeaderComponent />

         <Switch>
         <Route path='/home' component={HomePage} /> 
                 
         <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
         <Route path='/menu/:dishId' component={DishWithId} />
         <Route exact path='/contactus' component={Contact} />
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