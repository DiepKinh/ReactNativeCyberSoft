import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

export default class TextInputRN extends Component {
  render() {
    const {placeholder} = this.props;
    return (
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="rgba(255,255,255,0.5)"
        style={styles.textInput}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#19191f',
    borderRadius: 8,
    color: '#fff',
    marginBottom: 15,
    paddingLeft: 10,
  },
});
