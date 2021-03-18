import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
// import Counters from './counters';
// import Counters from './counters';
import Movies from './Movies';
// import GenreList from './components/genresList';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      currentGenre: 'All', 
    };
    // this.changeGenre = this.changeGenre.bind(this);
  }

  // changeGenre(genre) {
  //   this.setState({currentGenre: genre});
  // }

  render() { 

    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container">          
          { /*<GenreList changeGenre={this.changeGenre} /> */}
          <Movies currentGenre={this.state.currentGenre}/>
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;