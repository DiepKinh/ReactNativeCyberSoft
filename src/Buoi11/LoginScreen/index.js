import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {ButtonIcon, Text, TextInput} from '../components';
import {fontName} from '../components/ButtonIcon';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <View style={styles.headerContainer}>
          <ButtonIcon
            name="left"
            size={25}
            color="#fff"
            style={styles.goBackButton}
            onPress={this.props.navigateToOnBoardScreen}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formHeader}>
            <Text header>Login</Text>
            <Text>Glad to see you back</Text>
          </View>
          <View style={styles.formContent}>
            <TextInput placeholder={'Email'} />
            <TextInput placeholder={'Password'} />
          </View>
          <View style={styles.formFooter}>
            <Text>Forgot password?</Text>
            <ButtonIcon
              name="arrowright"
              size={25}
              color="#fff"
              style={[styles.goBackButton, {paddingHorizontal: 15}]}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={{alignSelf: 'center', marginBottom: 20}}>
            Or login with
          </Text>
          <View style={styles.viewButtonContainer}>
            <ButtonIcon
              name="twitch"
              size={20}
              color="#fff"
              style={styles.logoButton}
              font={fontName.FontAwesome}
            />
            <ButtonIcon
              name="twitch"
              size={20}
              color="#fff"
              style={styles.logoButton}
              font={fontName.FontAwesome}
            />
            <ButtonIcon
              name="google"
              size={20}
              color="#fff"
              style={styles.logoButton}
              font={fontName.FontAwesome}
            />
            <ButtonIcon
              name="apple"
              size={20}
              color="#fff"
              style={styles.logoButton}
              font={fontName.FontAwesome}
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
    paddingHorizontal: 10,
  },
  headerContainer: {
    flex: 1,
  },
  goBackButton: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 5,
  },
  formContainer: {
    flex: 11,
    justifyContent: 'center',
  },
  formHeader: {
    marginBottom: 50,
  },
  formContent: {
    marginBottom: 20,
  },
  formFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  viewButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoButton: {
    padding: 15,
    paddingHorizontal: 25,
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1,
    borderRadius: 8,
  },
});
