import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../pages/home';
import ProfileScreen from '../pages/profile';
import LoginScreen from '../pages/login';
import HeaderLogout from '../component/headerLogout';


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
export default StackNavigator({
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
