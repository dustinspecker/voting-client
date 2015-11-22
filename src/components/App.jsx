import {List, Map} from 'immutable';
import React from 'react';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({Trainspotting: 5, '28 Days Later': 4});

export default React.createClass({
  render() {
    return React.cloneElement(this.props.children, {pair, tally});
  }
});
