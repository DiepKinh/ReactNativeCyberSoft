import React, {Component} from 'react';
import {View, StyleSheet, Image, TextInput} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.boxTop}>
          <View style={styles.styleBoxTop}></View>
          <View style={styles.styleBoxTop}></View>
        </View>
        <View style={styles.boxBottom}>
          <View style={styles.boxBottomItem}>
            <View style={styles.styleBoxBottom}></View>
            <View style={styles.styleBoxBottom}></View>
          </View>
          <View style={styles.boxBottomItem}>
            <View style={styles.styleBoxBottom}></View>
            <View style={styles.styleBoxBottom}></View>
          </View>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  boxTop: {
    backgroundColor: '#96CC96',
    flex: 1,
    marginBottom: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  styleBoxTop: {
    backgroundColor: '#F4B940',
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  boxBottom: {
    backgroundColor: '#C9C9FF',
    flex: 1,
    flexDirection: 'row',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  boxBottomItem: {
    backgroundColor: '#C9C9FF',
    flex: 1,
    marginHorizontal: 10,
  },
  styleBoxBottom: {
    backgroundColor: '#3D85C6',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    flex: 1,
  },
});
