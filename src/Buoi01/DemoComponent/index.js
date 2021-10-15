import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.styleItem}>
          <Text style={styles.styleText}>Purple: #C9C9FF</Text>
        </View>
        <View style={[styles.styleItem, {backgroundColor: '#3D85C6'}]}>
          <Text style={styles.styleText}>Blue: #3D85C6</Text>
        </View>
        <View style={[styles.styleItem, {backgroundColor: '#96CC96'}]}>
          <Text style={styles.styleText}>Green: #96CC96</Text>
        </View>
        <View style={[styles.styleItem, {backgroundColor: '#F4B940'}]}>
          <Text style={styles.styleText}>Yellow: #F4B940</Text>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  styleItem: {
    backgroundColor: '#C9C9FF',
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  styleText: {fontSize: 18, fontWeight: 'bold'},
});
