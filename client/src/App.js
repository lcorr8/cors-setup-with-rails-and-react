import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3001/items')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  addItem = () => {
    fetch('http://localhost:3001/items', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item: { title: 'new item' } })
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.addItem()}>Add Item</button>
      </div>
    );
  }
}

export default App;
