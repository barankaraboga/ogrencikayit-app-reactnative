import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class Main extends Component {
componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyAPVfyh_vgO8Q-y2XMaJahdMzZ3uoMU2Y8',
    authDomain: 'react-ogrencikayit.firebaseapp.com',
    databaseURL: 'https://react-ogrencikayit.firebaseio.com',
    projectId: 'react-ogrencikayit',
    storageBucket: 'react-ogrencikayit.appspot.com',
    messagingSenderId: '884010301829'
  });
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default Main;
