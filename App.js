import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { middleware } from './app/utils/redux';
import appReducer from './app/reducers/appReducer';
import { AppWithNavigationState } from './app/navigator';


const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
