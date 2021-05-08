import React from "react"
import Dog from "./Dog"
import axios from 'axios'
import NumberOfDogs from './NumberOfDogs'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      numberOfDogs: 1
    }
  }
  handleChange = (e) =>{
    this.setState({this.state.numberOfDogs:e.value})
  }
  render(){
    const { numberOfDogs } = this.state;
  
    return (
      <>
        <NumberOfDogs handleChange={this.handleChange}dogCount={numberOfDogs}/>
        <Dog dogCount={numberOfDogs}/>
      </>
    );
  }
  
}

export default App