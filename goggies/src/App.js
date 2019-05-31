import React from 'react';
import logo from './logo.svg';
import './App.css';
import remote from './js/Service'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.fetcher=new remote();
    this.state={
      goggiesList:[]
    }
  }

  fetchDoggies=async ()=>{
    let temp=await this.fetcher.grabAll()
    console.log(temp.message);
  }

  
  componentDidMount() {
    this.fetchDoggies();
  }
  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}
