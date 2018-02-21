import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import * as actions from '../actions';

import Landing from './Landing';
import Weather from './Weather';


class App extends Component {
  componentDidMount() {
    // this.props.fetchWeather('lon');
  }
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/weather/:value" component={Weather} />
          </div>
        </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
