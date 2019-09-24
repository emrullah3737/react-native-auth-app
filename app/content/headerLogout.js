import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HeaderLogout extends Component {
  logout() {
    // Session kill
    const { navigation, navigate, data } = this.props;
    navigation.navigate(navigate, data);
  }

  render() {
    return (
      <View>
        <Text style={{ marginRight: 10 }} onPress={() => this.logout()}> Logout </Text>
      </View>
    );
  }
}
