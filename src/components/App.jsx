import {List} from 'immutable';
import React from 'react';

const pair = List.of('Trainspotting', '28 Days Later');

export default React.createClass({
  render() {
    return React.cloneElement(this.props.children, {pair});
  }
});
