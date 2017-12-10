import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Contents from "./components/contents";
import Counter from "./containers/Counter";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>*/}
        <Contents>
          {/*<div>123123</div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>*/}
          {/*<p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>*/}

          <Counter/>

        </Contents>
        <Footer/>
      </div>
    );
  }
}

export default App;
