import React,{Component} from "react";
import {CardList} from "./components/card-lists/card-list.component.jsx"
import {SearchBox} from "./components/search-box/searchbox.component.jsx"
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
    const {monsters, searchField} = this.state;
    const filtered = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    
    return(
      <div className="App">
        <SearchBox placeholder = "Search monsters" handleChange = { e=>this.setState({searchField: e.target.value})}/>
        <CardList monsters ={filtered}/>
    </div>
    )
  }
}

export default App;


