import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {paper, rock, scissor, player, computer, backgroud} from '../images';
export default class PlayItem extends Component {
  render() {
    const {selectImage, playerImage} = this.props;
    return (
      <View style={styles.playItem}>
        <Image style={styles.playerSelect} source={selectImage} />
        <View style={styles.triangle} />
        <Image style={styles.playerImage} source={playerImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playerSelect: {
    height: 100,
    width: 100,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 2,
    borderColor: '#ffff00',
    borderRadius: 10,
    marginBottom: 15,
  },
  playerImage: {
    height: 100,
    width: 100,
  },
  triangle: {
    height: 0,
    width: 0,
    backgroundColor: 'transparent',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#ffff00',
    position: 'absolute',
    top: 100,
    left: 35,
  },
});
