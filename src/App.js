import React, { Component } from 'react';
import './App.css';
import Persons from './Persons/Persons';

class App extends Component {

  state = {
    nome: '',
    skill: ''    
  }

  nomeHandler = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  skillHandler = (event) => {
    this.setState({
      skill: event.target.value
    })
  }

  limparHandler = () => {
    this.setState({
      nome: '',
      skill: ''
    })
  }

  render(){
    return (
      <div className={'App'}>   
        <Persons nome={this.state.nome} 
                 skill={this.state.skill} 
                 nomeH={this.nomeHandler} 
                 skillH={this.skillHandler} 
                 limpar={this.limparHandler}
        />  

        <p>Nome: {this.state.nome}</p>
        <p>Skill: {this.state.skill}</p>
      </div>
    );
  }
}

export default App;
