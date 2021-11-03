import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {paper, rock, scissor, player, computer, backgroud} from '../images';
import {userSelectAction} from '../Redux/actions/gameAction';
class SelectItem extends Component {
  onSelect = playerSelect => {
    this.props.userSelect(playerSelect);
  };
  render() {
    const {selectItem, selected} = this.props;
    return (
      <TouchableOpacity
        style={[styles.selectItemContainer, selected && styles.selectedItem]}
        onPress={() => this.props.userSelect(selectItem)}>
        <Image style={styles.selectItemImage} source={selectItem.image} />
      </TouchableOpacity>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    userSelect: selectItem => dispatch(userSelectAction(selectItem)),
  };
};
export default connect(null, mapDispatchToProps)(SelectItem);

const styles = StyleSheet.create({
  selectItemImage: {
    width: 50,
    height: 50,
  },
  selectItemContainer: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    borderWidth: 2,
    borderColor: '#ffff00',
  },
});
