import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/header';

export default class App extends Component {
render(){
  return (
          <div>
              <Header />
          </div>
        );
  }
}
render(<App />, document.getElementById('app'));
