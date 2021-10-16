import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import Alto_0 from './images/Alto_0.png';
import Alto_icon from './images/Alto_icon.png';

const data = {
  id: 1,
  title: "Alto's Odyssey",
  icon: Alto_icon,
  preview: Alto_0,
  subTitle:
    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
  backgroundColor: '#824671CC',
};

export default class ExUI extends Component {
  game = {
    id: 1,
    title: "Alto's Odyssey",
    icon: Alto_icon,
    preview: Alto_0,
    subTitle:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.',
    backgroundColor: '#824671CC',
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <Image source={data.preview} />
        <View
          style={[styles.viewItem, {backgroundColor: data.backgroundColor}]}>
          <Image style={styles.styleImgIcon} source={data.icon} />
          <View style={styles.styleViewText}>
            <Text style={styles.styleTextTop}>{data.title}</Text>
            <Text style={styles.styleTextButtom}>{data.subTitle}</Text>
          </View>
        </View> */}

        {/* Sử dụng data bên trong class */}
        <Image source={this.game.preview} />
        <View
          style={[
            styles.viewItem,
            {backgroundColor: this.game.backgroundColor},
          ]}>
          <Image style={styles.styleImgIcon} source={this.game.icon} />
          <View style={styles.styleViewText}>
            <Text style={styles.styleTextTop}>{this.game.title}</Text>
            <Text style={styles.styleTextButtom}>{this.game.subTitle}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343434',
  },
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
