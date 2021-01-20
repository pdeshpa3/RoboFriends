import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll'



class  App extends Component{

  constructor(){
    super();

    this.state={
      robots : [],
      searchfield: ''
    }
  }

  componentDidMount(){
    console.log("comp mounted");

    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response=>{
      return response.json();
    })
    .then(users=>{
      this.setState({robots: users});
    });
  }

  //syntax for this is diff as this is user defined func..n not part o inbuild react fnctions
  onSearchChange = (event)=>{
    
    this.setState({searchfield: event.target.value}); //use this mehod to chnage state always. 
   
  }

  render(){

    const filterRobots = this.state.robots.filter( robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
    });

    if(this.state.robots.length===0){
      return <h1> Loading... </h1>
    }else{
    return (
      <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange = {this.onSearchChange}/> 
      <Scroll>
      <CardList robots={filterRobots}/>
      </Scroll>
      </div>
    );
  }

  }
  
}

export default App; 

//props never change they are just input to components ...which components read
//but to communicate between components , we need state - it is like an obj 
//a prent component can provide a child component with a state..and once a child gets state..it becomes props.. state->props..
//and child can only read state which is now props


//passing onSearchChange function to searchbox compo

//even though we are not passing any props to scroll...it is wrapped around its child elements , therefore they are treated as props

//anytime u want to chnage state, use inbuild method provided by react compulsarily
//setState