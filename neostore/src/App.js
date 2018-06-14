import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Products />
        <Footer />
      </div>
    );
  }
}

export default App;
