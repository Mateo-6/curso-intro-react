import React from 'react';
import './App.css';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUi';

function App(props) {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );

}

export default App;


/*

function filterDuplicates(data) {
    // Write your code here
    // To debug: console.error('Debug messages...');

    let result = data.filter((item, index)=> {
      return data.indexOf(item) === index;
    });

    return result;

}



*/
