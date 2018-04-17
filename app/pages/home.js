import React from 'react';
import { View, Text } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions() {
    return {
      headerTitle: 'Home',
    };
  }

  constructor(props) {
    super(props);
    const { params } = props.navigation.state;
    this.state = {
      user: params,
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Text style={{ margin: 'auto' }}>WELCOME {this.state.user.name}</Text>
      </View>
    );
  }
}
