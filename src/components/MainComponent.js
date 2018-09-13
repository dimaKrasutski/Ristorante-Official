import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
       
    };
  }

  

  render() {

    const HomePage = ()=>{
      return(
        <Home ></Home>
      )
    }
    return (
      <div>
         <Header />
       <Switch>
       <Route path='/home' component={HomePage}></Route>
    <Route exact path = '/menu' component={() => <Menu dishes={this.state.dishes} />  } ></Route>
    <Redirect to='/home'></Redirect>
       </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;