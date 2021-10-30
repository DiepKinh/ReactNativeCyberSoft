import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {
  countUpAction,
  countDownAction,
  updateUserNameAction,
} from '../Redux/actions/countAction';
import InfoContent from './infoContent';

class DemoRedux extends Component {
  onCountUpPress = () => {
    this.props.countUp();
  };
  onCountDownPress = () => {
    this.props.countDown();
  };
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.text}> DemoRedux </Text>
        <Text style={styles.text}> Number: {this.props.number}</Text>

        <View style={styles.viewButton}>
          <TouchableOpacity onPress={this.onCountUpPress} style={styles.button}>
            <Text>Count up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onCountDownPress}
            style={[styles.button, {backgroundColor: '#bfb'}]}>
            <Text>Count down</Text>
          </TouchableOpacity>
        </View>
        <InfoContent />
        <TouchableOpacity
          onPress={this.props.reset}
          style={[styles.button, {backgroundColor: '#bfb'}]}>
          <Text>Reset</Text>
        </TouchableOpacity>
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
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    backgroundColor: '#bbf',
    margin: 5,
  },
  text: {
    fontSize: 20,
  },
});

const mapStateProps = state => {
  return {number: state.count.number};
};

const mapDispatchToProps = dispatch => {
  return {
    countUp: () => {
      dispatch(countUpAction());
    },
    countDown: () => {
      dispatch(countDownAction());
    },
    reset: () => {
      dispatch({type: 'RESET'});
    },
  };
};
export default connect(mapStateProps, mapDispatchToProps)(DemoRedux);
