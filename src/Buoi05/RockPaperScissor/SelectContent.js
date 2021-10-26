import React, {Component} from 'react';
import SelectItem from './SelectItem';

export default class SelectContent extends Component {
  renderSelectItem = () => {
    return this.props.listSelect.map(selectItem => (
      <SelectItem
        key={selectItem.id}
        selectItem={selectItem.image}
        onPress={() => this.props.onSelect(selectItem)}
        selected={selectItem.id === this.props.playerSelect.id}
      />
    ));
  };
  render() {
    return this.renderSelectItem();
  }
}
