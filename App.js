import React, {Component} from 'react';
import DemoComponent from './src/Buoi01/DemoComponent';
import ExLayout from './src/Buoi02/ExLayout';
import BinddingData from './src/Buoi03/BinddingData';
import ExUI from './src/Buoi03/ExUI';
import RenderList from './src/Buoi03/RenderList';
import Bidding from './src/Buoi03/BTVN/Bidding';

class App extends Component {
  render() {
    console.log('render');
    return <Bidding />;
  }
}

export default App;
