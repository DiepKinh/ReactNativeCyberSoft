import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {paper, rock, scissor, player, computer, backgroud} from '../images';
import {userSelectAction} from '../Redux/actions/gameAction';
import ButtonContent from './ButtonContent';
import ButtonItem from './ButtonItem';
import PlayItem from './PlayItem';
import SelectContent from './SelectContent';
import SelectItem from './SelectItem';

class RockPaperScissor extends Component {
  render() {
    const {playerSelect, computerSelect, score, times} = this.props;
    return (
      <ImageBackground source={backgroud} style={styles.container}>
        <View style={styles.overlay} />
        <SafeAreaView style={styles.safeAreaView}>
          <StatusBar barStyle="light-content" />
          <View style={styles.playContainer}>
            <PlayItem selectImage={playerSelect.image} playerImage={player} />
            <PlayItem
              selectImage={computerSelect.image}
              playerImage={computer}
            />
          </View>
          <View style={styles.selectContainer}>
            <SelectContent />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Score: {score}</Text>
            <Text style={styles.infoText}>Times: {times}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonContent />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  return {
    playerSelect: state.gameReducer.playerSelect,
    computerSelect: state.gameReducer.computerSelect,
    score: state.gameReducer.score,
    times: state.gameReducer.times,
  };
};

export default connect(mapStateToProps)(RockPaperScissor);
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
