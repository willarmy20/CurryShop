import React from 'react';
import './App.css';
import Home from './Pages/Home';
import ProductsList from './Pages/ProductsList';
import Accessory from './Pages/Accessory'
import BaseLayout from './Componets/BaseLayout'
import { Switch, Route } from 'react-router-dom';
import Footer from './Componets/Footer';


function App() {
  return (
    <div className="App">
        <BaseLayout />
        <Switch>
          <Route exact path='/' render={()=>(
              <Home />
        )} />
          <Route exact path="/shoes" render={()=>(
              <ProductsList />
        )} />
          <Route exact path="/accessory" render={()=>(
              <Accessory />
        )} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
