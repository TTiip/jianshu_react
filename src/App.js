import React, { Component } from 'react';
import Header from './common/Header'
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  render () {
    return (
      <Provider store={ store }>
        <div style={{borderBottom: '1px solid #f0f0f0'}}>
          <Header/>
        </div>
      </Provider>
    );
  }
}

export default App;
