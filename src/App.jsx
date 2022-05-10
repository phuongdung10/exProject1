import React from 'react';
import Login from "./components/Login";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Profile from "./components/Profile"
import Product from './components/Product';
import Filter from './components/Filter';
import { Route, Switch} from 'react-router-dom';



function App() {
  return (
    <Switch>
   {/* <Route
        path="/"
        exacts
        component={Login}
      />
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
      </Route>  */}
      <Shop />
      
    

    </Switch>

  );
}

export default App;
