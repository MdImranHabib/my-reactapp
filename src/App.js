import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Kuddus", age: 27}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) =>{
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: "Manu", age: 29},
        {name: "Kuddus", age: 29}
      ]
    });
  }

  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        {name: "Max", age: 28},
        {name: event.target.value, age: 29},
        {name: "Kuddus", age: 29}
      ]
    });
  }

   togglePersonsHandler = () => {
    const doesShowPersons = this.state.showPersons;
     this.setState({
      showPersons: !doesShowPersons});
   }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: "8px",
      cursor: 'pointer'
    };

    let persons = null;
     if(this.state.showPersons){
       persons = (
            <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, "Max")}
                change={this.nameChangeHandler}>
                  His hobbies: watching movies
              </Person>
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
       );
     }

    return(
      <div className="App">
        <h1>Hello! This is a React App</h1>
        <p>This is really working.</p>
        {/* <button style={style} onClick={this.switchNameHandler.bind(this, "Maximilian")}>Switch Name</button> */}
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
  // return React.createElement('div', {className:'App'},
  // React.createElement('h1', null, "Hello! This is a react app."));
  
}

export default App;