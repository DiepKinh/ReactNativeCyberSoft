import {thisExpression} from '@babel/types';
import React, {Component} from 'react';
import {StyleSheet, View, TextInput as TextInputRN} from 'react-native';
import Text from '../Text';

export default class TextInput extends Component {
  state = {
    focusInput: false,
  };
  // onFocus = () => {
  //   this.setState({focusInput: true});
  // };
  // onBlur = () => {
  //   if (this.props.onBlur) {
  //     this.props.onBlur();
  //   }
  //   this.setState({focusInput: false});
  // };
  render() {
    const {style, errorText, touched, placeholder} = this.props;
    console.log(touched);
    return (
      <>
        <TextInputRN
          placeholderTextColor="rgba(255,255,255,0.5)"
          {...this.props}
          // onFocus={this.focusInput}
          // onBlur={this.focusInput}
          style={[
            styles.textInput,
            errorText && styles.errorStyle,
            this.state.focusInput && styles.focusStyle,
            style,
          ]}

          // placeholder={placeholder}
          // onChangeText={onChangeText}
          // value={value}
          // secureTextEntry={secureTextEntry}
        />
        {!!errorText && <Text>{errorText}</Text>}
        {/* {touched && (
          <Text>
            {placeholder}:{touched}
          </Text>
        )} */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#19191f',
    borderRadius: 8,
    color: '#fff',
    marginBottom: 5,
    paddingLeft: 10,
    marginTop: 15,
  },
  errorStyle: {
    borderColor: 'red',
    borderWidth: 1,
  },
  focusStyle: {
    borderColor: '#bfb',
    borderWidth: 1,
  },
});
