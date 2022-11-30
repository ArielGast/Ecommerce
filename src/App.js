import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom';
import {ItemListContainer, ItemDetail, ItemFiltered, ItemPromos, CartCheckOut, PurchaseFinish } from './pages/index';
import {ProductProvider} from './context/productContext';



function App() {
  return (
    
    <ProductProvider>
      <NavBar />
      <main>
        <Routes>
          <Route exact path='/' element ={<ItemListContainer  />}></Route>
          <Route exact path='/wine/:productId' element ={<ItemDetail />}></Route>
          <Route exact path='/Category/:name' element ={<ItemFiltered />}></Route>
          <Route exact path='/Promos/' element ={<ItemPromos />}></Route>
          <Route exact path='/checkout/' element ={<CartCheckOut />}></Route>
          <Route exact path='/PurchaseFinish/' element ={<PurchaseFinish />}></Route>
        </Routes>
      </main>
    </ProductProvider>
    
  );
}

export default App;
