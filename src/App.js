import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Movies from './Movies';
import NavBar from './components/navbar';
import Rentals from './components/rentals';
import Customers from './components/customers';
import NotFound from './components/not-found';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      currentGenre: 'All', 
    };
  }

  render() {

    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm}/>
            <Route path="/movies/:id" component={MovieForm}/>
            <Route path="/movies" component={(props) =>  
              <Movies currentGenre={this.state.currentGenre} {...props}/>}
            />
            <Route path="/customers" component={Customers}/>
            <Route path="/rentals" component={Rentals}/>  
            
            <Route path="/not-found" component={NotFound}/>
            <Redirect from="/" exact to="/movies"/>
            <Redirect to="/not-found"/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;