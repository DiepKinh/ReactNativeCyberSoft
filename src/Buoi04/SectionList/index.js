import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  FlatList,
  SectionList,
} from 'react-native';
import GameInfo from './GameInfo';
import Alto_icon from './images/Alto_icon.png';

export default class DemoSectionList extends Component {
  listGame = [
    {
      title: '#824671CC',
      data: [
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
          backgroundColor: '#96CC96',
        },

        {
          title: "Alto's Odyssey",
          icon: Alto_icon,
          subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
          backgroundColor: '#824671CC',
        },
      ],
    },
    {
      title: '#3D85C6',
      data: [
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
          backgroundColor: '#96CC96',
        },
        {
          title: "Alto's Odyssey",
          icon: Alto_icon,
          subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
          backgroundColor: '#3D85C6',
        },
      ],
    },
    {
      title: '#96CC96',
      data: [
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
      ],
    },
    {
      title: '#F4B940',
      data: [
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
          backgroundColor: '#F4B940',
        },
        {
          title: "Alto's Odyssey",
          icon: Alto_icon,
          subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
          backgroundColor: '#F4B940',
        },
      ],
    },
    {
      title: '#3D85C6',
      data: [
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
          backgroundColor: '#96CC96',
        },
        {
          title: "Alto's Odyssey",
          icon: Alto_icon,
          subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
          backgroundColor: '#3D85C6',
        },
      ],
    },
    {
      title: '#96CC96',
      data: [
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
      ],
    },
  ];
  renderIcon = ({item}) => <GameInfo game={item} />;
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          contentContainerStyle={styles.scrollContent}
          sections={this.listGame}
          renderItem={this.renderIcon}
          renderSectionHeader={({section: {title}}) => (
            <View style={[styles.headerSection, {backgroundColor: title}]}>
              <Text>{title}</Text>
            </View>
          )}
          stickySectionHeadersEnabled={true}
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
  headerSection: {
    // marginTop: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
  },
});
