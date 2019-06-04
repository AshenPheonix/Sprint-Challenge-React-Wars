import React, { Component } from 'react';
import './App.css';
import StarwarsChars from './components/starwarsChars'
import Navigation from './components/Navigation'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next:'',
      prev:'',
      init:0
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        let stat=0
        if(data.previous)
          stat+=2
        if(data.next)
          stat++
        this.setState({ starwarsChars: data.results,next:data.next,prev:data.previous,init:stat });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Navigation
          init={this.state.init}
          prev={this.prev}
          next={this.next}
        />
        <StarwarsChars
          chars={this.state.starwarsChars}
        />
      </div>
    );
  }

  next=()=>{
    if(this.state.next)
      this.getCharacters(this.state.next)
  }
  prev=()=>{
    if(this.state.prev)
      this.getCharacters(this.state.prev)
  }
}

export default App;
