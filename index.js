import React, { Component, PropTypes } from 'react';
import HelloWorld  from './HelloWorld.js';
import Closings from './Closings.zip';
import WNOW from './WNOW.cc';

class RandomTest extends Component {
  static PropTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
  }
  render(){
    let {
      h2 = 'testing repo - WEB-1531 created by heba - testing :)',
    } = this.props;

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>{h2}</h2>
      <HelloWorld h2='testing helloWorld'></HelloWorld>
      </div>
    );
  }
}

export default RandomTest;
