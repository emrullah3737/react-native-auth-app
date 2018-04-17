import React from 'react';
import { View, Text, Button } from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions() {
    return {
      headerTitle: 'Profile',
    };
  }

  constructor(props) {
    super(props);

    const { params } = props.navigation.state;
    const { data } = params;

    const number1 = data ? data.number1 : 0;
    const number2 = data ? data.number2 : 0;

    const sum = parseInt(number1, 10) + parseInt(number2, 10);

    this.state = {
      number1,
      number2,
      sum,
    };
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 10, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}
