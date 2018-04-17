import React from 'react';
import { View, Text } from 'react-native';
import {
  Icon,
  TextInput,
  Button,
} from '@shoutem/ui';

export default class HomeScreen extends React.Component {
  static navigationOptions() {
    return {
      headerTitle: 'Login',
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  loginHandler() {
    const { name, password } = this.state;
    this.props.navigation.navigate('App', { name, password });
  }

  render() {
    const style = {
      inputText: {
        margin: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#d6d7da',
      },
      buttonCenter: {
        width: 100,
        height: 50,
        padding: 5,
        margin: 10,
        backgroundColor: '#ddd',
      },
    };
    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: 180 }}>
          <TextInput
            style={style.inputText}
            placeholder="Username or email"
            onChangeText={name => this.setState({ name })}
          />
          <TextInput
            style={style.inputText}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
          />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Button
              onPress={() => this.loginHandler()}
              style={style.buttonCenter}
            >
              <Icon name="turn-off" />
              <Text>LOGIN</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
