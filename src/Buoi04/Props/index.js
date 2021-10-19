import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from './Icon';
import {Angry, Care, Haha, Like, Love, Sad} from './images/icon.js';

// const images = [Angry, Care, Haha, Like, Love, Sad];

export default class Bindding extends Component {
  images = [Angry, Care, Haha, Like, Love, Sad];
  state = {
    selectedIcon: Angry,
  };
  pressIcon = nameIcon => {
    this.setState({selectedIcon: nameIcon});
  };
  renderIcon() {
    return this.images.map((image, index) => {
      return (
        <Icon
          key={index}
          icon={image}
          onPress={() => this.pressIcon(image)}
          selected={image === this.state.selectedIcon}
        />
      );
    });
  }
  render() {
    console.log(this.images.length);
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.state.selectedIcon} />
        </View>
        <View style={styles.viewIcon}>{this.renderIcon()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewIcon: {
    width: '90%',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 50,
    width: 50,
  },
});
