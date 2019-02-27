import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navegacion from './Components/navegacion'
import{ tarea } from '../src/todo.json';
import Formulario from './Components/formulario'
import Pokemon from './Components/Pokemon'
import Flippy from 'react-flippy'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Navegacion titulo="Inicio"/>
         <div className="container">
              <div className="row mt-4">
                       <Pokemon/>
              </div>
         </div>
      </div>
    )
  }
}

export default App;
