import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import LoginScreen from './LoginScreen/ValidateWithFormik';
// import LoginScreen from './LoginScreen';

import OnboardScreen from './OnboardScreen';

export default class RootScreen extends Component {
  state = {
    showLogin: true,
  };
  navigateToLoginScreen = () => this.setState({showLogin: true});
  navigateToOnboardScreen = () => this.setState({showLogin: false});

  render() {
    return (
      <>
        {this.state.showLogin ? (
          <LoginScreen navigateToOnBoardScreen={this.navigateToOnboardScreen} />
        ) : (
          <OnboardScreen navigateToLoginScreen={this.navigateToLoginScreen} />
        )}
      </>
    );
  }
}
