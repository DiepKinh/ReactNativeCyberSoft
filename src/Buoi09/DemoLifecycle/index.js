import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Child from './Child';

export default class DemoLifecycle extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      userName: '',
    };
    console.log('constructor run');
    // this.onPress() = this.onPress.bind(this);
  }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log('getDrivedStateFromProps run');
  //     // return (state.number = 1);
  //     return state;
  //   }

  //   shouldComponentUpdate() {
  //     console.log('shouldComponentUpdate run');
  //     console.log(this.state.number);
  //     // if (this.state.number > 3) {
  //     //   return false;
  //     // }
  //     return true;
  //     // return false;
  //   }

  //   componentDidMount() {
  //     // setTimeout(() => {
  //     //   this.setState({number: 1});
  //     // }, 3000);
  //     console.log('componentDidMount run');
  //   }
  onPress() {
    this.setState({number: this.state.number + 1});
  }

  render() {
    console.log('render run');
    return (
      <View style={styles.container}>
        <Text> DemoLifecycle </Text>
        <TouchableOpacity style={styles.btn} onPress={this.onPress}>
          <Text>Count up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.setState({userName: 'Diệp Kinh'})}>
          <Text>ReName</Text>
        </TouchableOpacity>
        <Text> number: {this.state.number} </Text>
        <Child userName={this.state.userName} />
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
  btn: {
    backgroundColor: '#ccc',
    padding: 5,
  },
});
