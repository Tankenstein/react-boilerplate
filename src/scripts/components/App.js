import React, { Component } from 'react';
import { connect } from 'react-redux';
import { identity } from 'lodash';

class App extends Component {
  render() {
    return (
      <div>
        Welcome to hot-reloading!
      </div>
    );
  }
}

export default connect(identity)(App);
