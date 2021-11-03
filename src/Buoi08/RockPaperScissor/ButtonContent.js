import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {
  calResultAction,
  userPlayAction,
  userResetAction,
} from '../Redux/actions/gameAction';
import ButtonItem from './ButtonItem';

export class ButtonContent extends Component {
  onPlayPress = () => {
    const randomSelect = setInterval(() => {
      this.props.userPlay();
    }, 200);

    setTimeout(() => {
      clearInterval(randomSelect);
      this.props.calResult();
    }, 2000);
  };

  render() {
    return (
      <View style={styles.buttonContainer}>
        <ButtonItem title="Play" onPress={this.onPlayPress} />
        <ButtonItem
          title="Back"
          isLinear={true}
          colors={['#f9f', '#ff0']}
          onPress={this.props.userReset}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userPlay: () => dispatch(userPlayAction()),
    calResult: () => dispatch(calResultAction()),
    userReset: () => dispatch(userResetAction()),
  };
};

export default connect(null, mapDispatchToProps)(ButtonContent);

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
