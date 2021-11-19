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
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LoginScreen extends Component {
  state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    focusInput: false,
  };
  onChangeText = (text, type) => {
    this.setState({[type]: text});
  };

  submitLogin = (email, password) => {
    return axios({
      method: 'POST',
      url: 'http://svcy3.myclass.vn/api/Users/signin',
      data: {
        email,
        password,
      },
    });
  };
  onSubmit = async () => {
    const {email, emailError, password, passwordError} = this.state;
    try {
      const result = await this.submitLogin(email, password);
      await AsyncStorage.setItem('userEmail', result.data.content.email);
      // console.log(result.data.content.email);
    } catch (error) {
      console.log(error);
    }
  };
  getItem = async () => {
    try {
      const result = await AsyncStorage.getItem('userEmail');
      return result;
    } catch (error) {
      return false;
    }
  };
  saveUserEmailToInput = async () => {
    const email = await this.getItem();
    if (email) {
      this.setState({email});
    }
  };
  componentDidMount() {
    this.saveUserEmailToInput();
  }

  onBlur = () => {
    const {email, password} = this.state;
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!regexEmail.test(email)) {
      this.setState({emailError: 'Email Không Hợp lệ'});
    } else {
      this.setState({emailError: ''});
    }
    if (!(password.trim().length > 7)) {
      this.setState({
        passwordError: 'Password tối thiểu 8 ký tự và không có khoảng trắng',
      });
    } else {
      this.setState({passwordError: ''});
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <View style={styles.container}>
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
              <TextInput
                placeholder={'Email'}
                onChangeText={text => this.onChangeText(text, 'email')}
                value={this.state.email}
                onBlur={this.onBlur}
                errorText={this.state.emailError}
              />

              <TextInput
                placeholder={'Password'}
                onChangeText={text => this.onChangeText(text, 'password')}
                value={this.state.password}
                secureTextEntry={true}
                onBlur={this.onBlur}
                errorText={this.state.passwordError}
              />
            </View>
            <View style={styles.formFooter}>
              <Text>Forgot password?</Text>
              <ButtonIcon
                name="arrowright"
                size={25}
                color="#fff"
                style={[styles.goBackButton, {paddingHorizontal: 15}]}
                onPress={this.getItem}
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
  focusStyle: {
    borderColor: '#bfb',
    borderWidth: 1,
  },
  errorStyle: {
    borderColor: 'red',
    borderWidth: 1,
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
