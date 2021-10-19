import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

import Alto_icon from './images/Alto_icon.png';

export default class DemoScrollView extends Component {
  listGame = [
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      backgroundColor: '#824671CC',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      backgroundColor: '#3D85C6',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      backgroundColor: '#96CC96',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      backgroundColor: '#F4B940',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      backgroundColor: '#824671CC',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      backgroundColor: '#3D85C6',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      backgroundColor: '#96CC96',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      backgroundColor: '#F4B940',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      backgroundColor: '#96CC96',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      backgroundColor: '#F4B940',
    },
    {
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      backgroundColor: '#824671CC',
    },
  ];

  renderListGame = () => {
    return this.listGame.map((game, index) => {
      return (
        <View
          key={index}
          style={[styles.viewItem, {backgroundColor: game.backgroundColor}]}>
          <Image style={styles.styleImgIcon} source={game.icon} />
          <View style={styles.styleViewText}>
            <Text style={styles.styleTextTop}>{game.title}</Text>
            <Text style={styles.styleTextButtom}>{game.subTitle}</Text>
          </View>
        </View>
      );
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}>
          {this.renderListGame()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
  },
  scrollContainer: {
    // marginBottom: 10,
  },
  scrollContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
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
