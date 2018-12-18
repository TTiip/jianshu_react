import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './common/Header'
import Home from './pages/Home'
import Detail from './pages/Detail/loadable'
import Login from './pages/Login'
import Writer from './pages/Write'
import store from './store'

class App extends Component {
  render () {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <div>
            <div style={{borderBottom: '1px solid #f0f0f0'}}>
              <Header/>
            </div>
            <Route path='/' exact component={ Home }></Route>
            <Route path='/login' exact component={ Login }></Route>
            <Route path='/write' exact component={ Writer }></Route>
            <Route path='/detail/:id' exact component={ Detail }></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
