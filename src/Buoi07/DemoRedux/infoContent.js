import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {updateUserAction} from '../Redux/actions/userAction';

class InfoContent extends Component {
  onUpdateUserName = (userName, address) => {
    this.props.updateUserName(userName, address);
  };
  render() {
    return (
      <View>
        <Text style={styles.text}> UserName: {this.props.userName}</Text>
        <Text style={styles.text}> Address: {this.props.address}</Text>
        <TouchableOpacity
          onPress={() => this.onUpdateUserName('Thu Diep', 'Gia Lai')}
          style={[styles.button, {backgroundColor: '#ffb'}]}>
          <Text>UserName</Text>
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
  return {userName: state.user.userName, address: state.user.address};
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserName: (userName, address) => {
      dispatch(updateUserAction({userName, address}));
    },
  };
};
export default connect(mapStateProps, mapDispatchToProps)(InfoContent);
