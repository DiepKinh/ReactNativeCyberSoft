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
import {paper, rock, scissor, player, computer, backgroud} from '../images';
import ButtonItem from './ButtonItem';
import PlayItem from './PlayItem';
import SelectContent from './SelectContent';
import SelectItem from './SelectItem';

class RockPaperScissor extends Component {
  state = {
    playerSelect: {id: 'scissor', image: scissor},
    computerSelect: {id: 'rock', image: rock},
    listSelect: [
      {id: 'scissor', image: scissor},
      {id: 'rock', image: rock},
      {id: 'paper', image: paper},
    ],
    score: 0,
    times: 9,
  };

  onSelect = playerSelect => {
    this.setState({playerSelect});
  };

  onPlayPress = () => {
    if (this.state.times == 0) {
      Alert.alert('Game Over', 'Bạn đã hết lượt chơi');
    } else {
      let computerSelect;
      const randomSelect = setInterval(() => {
        computerSelect = this.state.listSelect[Math.floor(Math.random() * 3)];
        this.setState({computerSelect}, () => {});
      }, 200);

      setTimeout(() => {
        clearInterval(randomSelect);
        this.calResult();
      }, 2000);
    }
  };

  calResult = () => {
    const {playerSelect, computerSelect, times, score} = this.state;
    let timeResult = times;
    let scoreResult = score;

    // if (playerSelect.id === 'scissor' && computerSelect.id === 'rock') {
    //   timeResult = timeResult - 1;
    // } else if (playerSelect.id === 'scissor' && computerSelect.id === 'paper') {
    //   timeResult = timeResult + 1;
    //   scoreResult = scoreResult + 1;
    // }
    /*
     * !djawehfkjah
     *
     */
    switch (playerSelect.id) {
      case 'rock':
        switch (computerSelect.id) {
          case 'scissor':
            timeResult = timeResult + 1;
            scoreResult = scoreResult + 1;
            break;
          case 'paper':
            timeResult = timeResult - 1;
            break;
          default:
            break;
        }
        break;
      case 'paper':
        switch (computerSelect.id) {
          case 'rock':
            timeResult = timeResult + 1;
            scoreResult = scoreResult + 1;
            break;
          case 'scissor':
            timeResult = timeResult - 1;
            break;
          default:
            break;
        }
        break;
      default:
        switch (computerSelect.id) {
          case 'paper':
            timeResult = timeResult + 1;
            scoreResult = scoreResult + 1;
            break;
          case 'rock':
            timeResult = timeResult - 1;
            break;
          default:
            break;
        }
        break;
    }
    this.setState({times: timeResult, score: scoreResult});
  };
  onResumePress = () => {
    this.setState({times: 9, score: 0});
  };
  render() {
    const {playerSelect, computerSelect, score, times, listSelect} = this.state;
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
            <SelectContent
              listSelect={listSelect}
              onSelect={this.onSelect}
              playerSelect={playerSelect}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Score: {score}</Text>
            <Text style={styles.infoText}>Times: {times}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonItem
              colors={['#f9f', '#ff0']}
              isLinear={true}
              onPress={this.onPlayPress}
            />
            <ButtonItem
              title="Back"
              backgroundColor="#ff0"
              onPress={this.onResumePress}
            />
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
