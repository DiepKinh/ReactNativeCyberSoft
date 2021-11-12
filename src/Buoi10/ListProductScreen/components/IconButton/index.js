import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const fontName = {
  FontAwesome: 'FontAwesome',
};

export default class IconButton extends Component {
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
    return <TouchableOpacity>{this.renderIcon()}</TouchableOpacity>;
  }
}

const styles = StyleSheet.create({});
