import React, {Component, Fragment} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

export default class BinddingData extends Component {
  name = 'Diệp Kính';
  address = 'Gia Lai';

  state = {
    isPedding: false,
  };
  pressButton = () => {
    console.log('press button');
    this.setState({isPedding: true}, () => {
      console.log(this.state.isPedding);
    });
  };

  pressButton2 = nameButton => {
    console.log(nameButton);
    this.setState({isPedding: true}, () => {
      console.log(this.state.isPedding);
    });
  };

  renderName = () => {
    if (this.state.isPedding) {
      return (
        <>
          <Text style={styles.styleText}>{this.name}</Text>
          <Text style={styles.styleText}>{this.address}</Text>
        </>
      );
    }
  };

  render() {
    console.log('render');
    return (
      <View style={styles.container}>
        <Button title="hihi" style={styles.btnStyle}></Button>
        {/* Cach 1 */}
        {this.renderName()}

        {/* Cach 2 */}
        {/* {this.state.isPedding ? (
          <>
            <Text style={styles.styleText}>{this.name}</Text>
            <Text style={styles.styleText}>{this.address}</Text>
          </>
        ) : null} */}

        {/* Cach 3 */}
        {/* {this.state.isPedding && (
          <>
            <Text style={styles.styleText}>{this.name}</Text>
            <Text style={styles.styleText}>{this.address}</Text>
          </>
        )} */}

        <Text style={styles.styleText}>{this.name}</Text>
        <TouchableOpacity
          style={styles.btnStyleOpacity}
          onPress={this.pressButton}>
          <Text>hihi</Text>
          <Text>hihi</Text>
        </TouchableOpacity>
        <TouchableHighlight
          style={[styles.btnStyleOpacity, {backgroundColor: '#F4B940'}]}
          onPress={() => this.pressButton2('TouchableHighlight')}
          underlayColor="red">
          <Fragment>
            <Text>haha</Text>
            <Text>hihi</Text>
          </Fragment>
        </TouchableHighlight>
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
  btnStyle: {
    backgroundColor: '#96CC96',
    height: 50,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    //Không ăn style chỉ ăn màu đối với android
  },
  btnStyleOpacity: {
    height: 50,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#96CC96',
    marginVertical: 20,
  },
  btnStyleHightLight: {
    backgroundColor: 'gray',
  },
  styleText: {color: 'red', fontSize: 20},
});
