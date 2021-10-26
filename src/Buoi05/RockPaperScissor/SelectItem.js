import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {paper, rock, scissor, player, computer, backgroud} from '../images';
export default class SelectItem extends Component {
  render() {
    const {selectItem, onPress, selected} = this.props;
    return (
      <TouchableOpacity
        style={[styles.selectItemContainer, selected && styles.selectedItem]}
        onPress={onPress}>
        <Image style={styles.selectItemImage} source={selectItem} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  selectItemImage: {
    width: 50,
    height: 50,
  },
  selectItemContainer: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    borderWidth: 2,
    borderColor: '#ffff00',
  },
});
