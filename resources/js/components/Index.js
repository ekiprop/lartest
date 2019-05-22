import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import ProductsList from './ProductsList';

class Index extends Component {
    render () {
      return (
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
                <Route exact path='/' component={ProductsList} />
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
  }

  ReactDOM.render(<Index />, document.getElementById('index'))