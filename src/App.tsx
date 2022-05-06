import React from 'react';
import Login from "././components/Login";
import Shop from "././components/Shop";
import Cart from "./components/Cart";
import Profile from "./components/Profile"
import Product from './components/Product';
import Filter from './components/Filter';
import {BrowserRouter, Route} from 'react-router-dom';
import MyShop from './components/MyShop';
import MyCart from './components/MyCart';
import CartHeader from './components/CartHeader';



function App() {
  return (
    <BrowserRouter>
            <Route path='/shop'>
             <Shop />
           </Route>
           <Route path='/'>
             <Login />
           </Route>
           <Route path='/filter'>
             <Filter />
           </Route>
           <Route path='/product'>
             <Product />
           </Route>
       
          {/* <Product /> */}
             
   
    </BrowserRouter>
  );
}

export default App;
