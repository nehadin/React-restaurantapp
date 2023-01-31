import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RestaurantList from './Components/Restaurantlist';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Viewrest from './Components/Viewrest';

function App() {
  return (
    <div className="App">
      {/* All the component that need routing are added inside <Router> */}
      <Router>    
        <Header/>
        <h1>Restaurant App</h1>
        
          {/* To set paths, we put them inside <Routes> */}
        <Routes>
          {/* below we set path to RestaurantList */}
          <Route path='/' element={<RestaurantList/>}/>
          

          <Route path='/view-restaurant/:id' element={<Viewrest></Viewrest>}/>
          {/* <Restview></Restview> */}
        </Routes>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
