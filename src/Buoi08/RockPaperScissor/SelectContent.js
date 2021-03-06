import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userSelectAction} from '../Redux/actions/gameAction';
import SelectItem from './SelectItem';

class SelectContent extends Component {
  onSelect = playerSelect => {
    this.props.userSelect(playerSelect);
  };
  renderSelectItem = () => {
    return this.props.listSelect.map(selectItem => (
      <SelectItem
        key={selectItem.id}
        selectItem={selectItem}
        selected={selectItem.id === this.props.playerSelectItem}
      />
    ));
  };
  render() {
    return this.renderSelectItem();
  }
}

const mapStateToProps = state => {
  return {
    listSelect: state.gameReducer.listSelect,
    playerSelectItem: state.gameReducer.playerSelect.id,
  };
};

export default connect(mapStateToProps)(SelectContent);
