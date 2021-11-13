import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Text from '../Text';
export default class index extends Component {
  render() {
    const {title, style, onPress, gradient, height, border} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={[styles.buttonStyles, style]}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  buttonStyles: {
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientContainer: {
    margin: 15,
    borderBottomColor: '#fff',
  },
});
