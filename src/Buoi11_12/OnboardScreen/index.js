import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Text, Button} from '../components';
export default class OnboardScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <View style={styles.bannerContainer}></View>
        <View style={styles.infoContainer}>
          <Text style={styles.headerText}>Welcome</Text>
          <Text style={styles.headerText}>Diệp Kính App</Text>

          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title={'Sign up'} style={styles.signupBtn} />
          <View style={styles.gradientBorder}>
            <Button
              title={'Sign in'}
              style={styles.loginbtn}
              onPress={this.props.navigateToLoginScreen}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  bannerContainer: {
    flex: 2,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
  },
  descriptionText: {
    marginTop: 20,
    opacity: 0.7,
  },
  buttonContainer: {
    paddingHorizontal: 30,
    flex: 1,
  },
  signupBtn: {
    flex: 1,
    backgroundColor: '#19191f',
  },
  loginbtn: {
    margin: 1,
    flex: 1,
    width: '99%',
    backgroundColor: '#000',
  },
  gradientBorder: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
