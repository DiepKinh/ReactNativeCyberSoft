import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {paper, rock, scissor, player, computer, backgroud} from '../images';
export default class SelectItem extends Component {
  render() {
    return (
      <View style={styles.selectItemContainer}>
        <Image style={styles.selectItemImage} source={this.props.selectItem} />
      </View>
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
    borderWidth: 2,
    borderColor: '#ffff00',
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
