import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import {ButtonIcon, Text, TextInput} from '../components';
import {fontName} from '../components/ButtonIcon';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validateSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email khong hop le!')
    .required('Trường thông tin này bắt buộc nhập!'),
  pasword: Yup.string()
    .min(5, 'Nhập tối thiểu 5 kí tự')
    .required('Trường thông tin này bắt buộc nhập!'),
});
export default class LoginScreen extends Component {
  onSubmit = values => {
    console.log(values);
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

          <Formik
            validationSchema={validateSchema}
            initialValues={{email: 'email@gmail.com', password: ''}}
            onSubmit={this.onSubmit}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <View style={styles.formContainer}>
                <View style={styles.formHeader}>
                  <Text header>Login With Formik</Text>
                  <Text>Glad to see you back!</Text>
                </View>
                <View>
                  <TextInput
                    placeholder={'Email'}
                    onChangeText={handleChange('email')}
                    value={values.email}
                    onBlur={handleBlur('email')}
                    errorText={errors.email}
                    // touched={touched.email}
                  />
                  <TextInput
                    placeholder={'Password'}
                    onChangeText={handleChange('password')}
                    value={values.password}
                    errorText={errors.password}
                    onBlur={handleBlur('password')}
                    // touched={touched.password}
                  />
                </View>
                <View style={styles.formFooter}>
                  <Text>Forgot Password?</Text>
                  <ButtonIcon
                    name="arrowright"
                    size={25}
                    color="#fff"
                    style={[styles.goBackButton, {paddingHorizontal: 15}]}
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            )}
          </Formik>

          <View style={styles.buttonContainer}>
            <Text>or login with</Text>
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
