import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  c = 'john';
  render() {
    return (
      <>
        {/* Class based component
        <br />
        Hello, {this.c} */}

        <Navbar />
        <News />
      </>
    )
  }
}
