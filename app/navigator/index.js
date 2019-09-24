import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../pages/home';
import ProfileScreen from '../pages/profile';
import LoginScreen from '../pages/login';
import { addListener } from '../utils/redux';
import HeaderLogout from '../content/headerLogout';


// TAB NAVIGATOR
const AppStack = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: () => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'steelblue',
    inactiveTintColor: '#555',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
});


// STACK NAVIGATOR
export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  App: { screen: AppStack },
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
}, {
  initialRouteName: 'Login',
  mode: 'modal',
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    headerLeft: null,
    headerRight: navigation.state.routeName !== 'Login' ? <HeaderLogout navigation={navigation} navigate="Login" /> : null,
  }),
});


class App extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export const AppWithNavigationState = connect(mapStateToProps)(App);
