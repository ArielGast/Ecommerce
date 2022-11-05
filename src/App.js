import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContaniner from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContaniner name = 'Ariel' />
    </div>
  );
}

export default App;
