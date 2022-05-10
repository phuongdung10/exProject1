import React from 'react';
import Login from "./components/Login";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Profile from "./components/Profile"
import Product from './components/Product';
import Filter from './components/Filter';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import MyShop from './components/MyShop';
import MyCart from './components/MyCart';
import CartHeader from './components/CartHeader';
import ProtectedRoute from './ProtectedRoute';



function App() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={Login}
      />
      {/* <Route path='/'>
        <Login /> */}
      <Route path='/shop'>
        <Shop />
      </Route>
      <Route path='/filter'>
        <Filter />
      </Route>
      <Route path='/product'>
        <Product />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
      {/* </Route> */}



      {/* <Product /> */}

    </Switch>





  );
}

export default App;
