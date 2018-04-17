import React from 'react';
import Navigator from './app/navigator/index';

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return <Navigator />;
  }
}
