import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import GameInfo from './GameInfo';
import Alto_icon from './images/Alto_icon.png';

export default class DemoFlatList extends Component {
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
  renderIcon = ({item}) => <GameInfo game={item} />;
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.scrollContent}
          data={this.listGame}
          renderItem={this.renderIcon}
          keyExtractor={(item, index) => {
            return `${item.title}_${index}`;
          }}
          ListEmptyComponent={
            <View style={styles.viewItemEmty}>
              <Text>Danh sách rỗng!!!</Text>
            </View>
          }
        />
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
  viewItemEmty: {
    width: '90%',
    height: 100,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4B940',
  },
});
