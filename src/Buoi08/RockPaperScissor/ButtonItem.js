import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class ButtonItem extends Component {
  render() {
    const {colors, title, isLinear, backgroundColor, onPress} = this.props;
    if (isLinear) {
      return (
        <LinearGradient
          style={styles.buttonContainer}
          colors={colors}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.buttonText}> {title} </Text>
          </TouchableOpacity>
        </LinearGradient>
      );
    } else {
      return (
        <TouchableOpacity
          style={[styles.buttonContainer, {backgroundColor}]}
          onPress={onPress}>
          <Text style={styles.buttonText}> {title} </Text>
        </TouchableOpacity>
      );
    }
  }
}
ButtonItem.defaultProps = {
  title: 'Play',
  backgroundColor: '#e1b01b',
  colors: ['#fff', '#000'],
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 130,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
