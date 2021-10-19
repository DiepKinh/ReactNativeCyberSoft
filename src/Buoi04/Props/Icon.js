import React, {Component} from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class Icon extends Component {
  render() {
    const {icon, onPress, selected} = this.props;
    console.log(selected);
    return (
      <TouchableOpacity
        style={[styles.btnStyle, selected && styles.selected]}
        onPress={onPress}>
        <Image style={[styles.icon]} source={icon} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    height: 50,
    width: 50,
  },
  btnStyle: {
    padding: 0.5,
    borderRadius: 100,
  },
  selected: {
    borderColor: 'gray',
    borderWidth: 5,
  },
});
