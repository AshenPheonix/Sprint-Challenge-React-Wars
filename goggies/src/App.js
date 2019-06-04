import React from 'react';
import './App.css';
import remote from './js/Service'
import Controller from './components/GoggieList'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.fetcher=new remote();
    this.state={
      goggiesList:["Loading"]
    }
  }

  fetchDoggies=async ()=>{
    let temp=await this.fetcher.grabAll()
    temp=temp.message
    let arr= []
    for(let key in temp){
      if(temp.hasOwnProperty(key) && !Array.isArray(temp[key]))
        arr.push(key)
      else if(temp.hasOwnProperty(key) && Array.isArray(temp[key])){
        temp[key].forEach(sub=>arr.push(`${sub} ${key}`))
      }
    }
    this.setState({goggiesList:arr})
  }

  
  componentDidMount() {
    this.fetchDoggies();
  }
  

  render(){
    return (
      <div className="App">
        <Controller list={this.state.goggiesList}/>
      </div>
    )
  }
}
