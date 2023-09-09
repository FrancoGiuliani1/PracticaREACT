import logo from './logo.svg';
import './App.css';
import TodoList from './Componentes/TodoList';
import TodoForm from './Componentes/TodoForm';
import TodoItem from './Componentes/TodoItem';
import React, { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]); //task: indica el estado actual de las tareas.
  //setTask: funcion que permite actualizar el estado de Task
  const [taskText, setTaskText] = useState (''); 
  
  const handleTaskTextChange = (event) => {
       setTaskText(event.target.value);  
  }
  const addTask = () => {
    if (taskText.trim() !== ''){
     setTasks ([...tasks, taskText]); //Agrega la nueva tarea al array
     setTaskText('');//limpia la entrada del campo para ingresar tareas nuevas

    }
  };
function hola (){
  <h1>Hola</h1>
};
}

export default App;
