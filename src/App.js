import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom';
import {ItemListContainer, ItemDetail} from './pages/index';
import {ProductProvider} from './context/productContext';

function App() {
  return (
    
    <ProductProvider>
      <NavBar />
      <main>
          <Routes>
            <Route exact path='/' element ={<ItemListContainer  />}></Route>
            <Route exact path='/category/:productId' element ={<ItemDetail />}></Route>
            {/* <Route path='/' ></Route> */}
          </Routes>
        </main>
    </ProductProvider>
    
  );
}

export default App;
