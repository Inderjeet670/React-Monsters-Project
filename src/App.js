import React,{Component} from "react";
import {CardList} from "./components/card-lists/card-list.component.jsx"
import './App.css';

class App extends Component{

  constructor(){
    super()
    this.state = {
      monsters:[
      ],
      searchField:''

    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  render(){
    return(
      <div className="App">
        <input onChange ={(e)=>{
          this.setState({searchField: e.target.value}, ()=>{console.log(this.state.searchField)})
          console.log(this.state.searchField)
          }} type="search" placeholder = "Search monsters"></input>
        <CardList monsters ={this.state.monsters}/>
    </div>
    )
  }
}

export default App;


