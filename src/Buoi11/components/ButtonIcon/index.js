import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Text from '../Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const fontName = {
  FontAwesome: 'FontAwesome',
};
export default class ButtonIcon extends Component {
  renderIcon = () => {
    const {name, size, color, font} = this.props;

    switch (font) {
      case fontName.FontAwesome:
        return <FontAwesome name={name} color={color} size={size} />;
      default:
        return <AntDesign name={name} color={color} size={size} />;
    }
  };
  render() {
    const {title, style, onPress, gradient, height, border} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={[styles.buttonStyles, style]}>
        {this.renderIcon()}
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
