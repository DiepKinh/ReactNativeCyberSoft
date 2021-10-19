import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class GameInfo extends Component {
  render() {
    const {game} = this.props;
    return (
      <View style={[styles.viewItem, {backgroundColor: game.backgroundColor}]}>
        <Image style={styles.styleImgIcon} source={game.icon} />
        <View style={styles.styleViewText}>
          <Text style={styles.styleTextTop}>{game.title}</Text>
          <Text style={styles.styleTextButtom}>{game.subTitle}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewItem: {
    width: '90%',
    height: 100,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  styleImgIcon: {
    height: 50,
    width: 50,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    marginHorizontal: 10,
  },
  styleViewText: {
    width: '70%',
    marginHorizontal: 10,
  },
  styleTextTop: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  styleTextButtom: {
    color: 'white',
    fontSize: 14,
  },
});
