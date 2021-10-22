import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Image,
  SafeAreaView,
} from 'react-native';
import {paper, rock, scissor, player, computer, backgroud} from '../images';
import ButtonItem from './ButtonItem';
import PlayItem from './PlayItem';
import SelectItem from './SelectItem';

class RockPaperScissor extends Component {
  render() {
    return (
      <ImageBackground source={backgroud} style={styles.container}>
        <View style={styles.overlay} />
        <SafeAreaView style={styles.safeAreaView}>
          <StatusBar barStyle="light-content" />
          <View style={styles.playContainer}>
            <PlayItem selectImage={paper} playerImage={player} />
            <PlayItem selectImage={scissor} playerImage={computer} />
          </View>
          <View style={styles.selectContainer}>
            <SelectItem selectItem={scissor} />
            <SelectItem selectItem={rock} />
            <SelectItem selectItem={paper} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Score: 0</Text>
            <Text style={styles.infoText}>Times: 0</Text>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonItem colors={['#f9f', '#ff0']} isLinear={true} />
            <ButtonItem title="Back" backgroundColor="#ff0" />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default RockPaperScissor;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  overlay: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  safeAreaView: {
    flex: 1,
  },
  playContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0fc',
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // triangle react native seacrch gg, với cái tam giác dưới
});
