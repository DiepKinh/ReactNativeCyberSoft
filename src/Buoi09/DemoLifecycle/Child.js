import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class Child extends Component {
  constructor(props) {
    super(props);
    console.log('constructor run');
    this.state = {
      numberChild: 3,
    };
  }

  //   static getDerivedStateFromProps(props, state) {
  //     if (props.number > state.numberChild) {
  //       return (state.numberChild = props.number);
  //     }
  //     return state;
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log('preProps', prevProps);
  //     console.log('componentDidUpdate run');
  //   }

  //   componentDidMount() {
  //     this.sub = setInterval(() => {
  //       console.log('interval');
  //     }, 1000);
  //   }

  //   componentWillUnmount() {
  //     clearInterval(this.sub);
  //     console.log('componentWillUnmount run');
  //   }

  shouldComponentUpdate(nextProps) {
    console.log(nextProps);
    console.log(this.props);

    if (nextProps.userName !== this.props.userName) {
      return true;
    }

    return false;
  }
  render() {
    console.log('renderChild run');
    return (
      <>
        <Text> Child Component </Text>
        <Text> numberChild: {this.props.number} </Text>
        <Text> UserName: {this.props.userName} </Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
