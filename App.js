import React, {Component} from 'react';
import DemoComponent from './src/Buoi01/DemoComponent';
import ExLayout from './src/Buoi02/ExLayout';
import BinddingData from './src/Buoi03/BinddingData';
import ExUI from './src/Buoi03/ExUI';
import RenderList from './src/Buoi03/RenderList';
import Bidding from './src/Buoi03/BTVN/Bidding';
import DemoProps from './src/Buoi04/Props';
import DemoScrollView from './src/Buoi04/ScrollView';
import DemoFlatList from './src/Buoi04/FlastList';
import DemoSectionList from './src/Buoi04/SectionList';
import LayoutZalo from './src/Buoi04/BTVN';
// import RockPaperScissor from './src/Buoi05_06/RockPaperScissor';
// import {store} from './src/Buoi07/Redux/store';
import {Provider} from 'react-redux';
import DemoRedux from './src/Buoi07/DemoRedux';
import store from './src/Buoi08/Redux/store';
import RockPaperScissor from './src/Buoi08/RockPaperScissor';
import DemoLifecycle from './src/Buoi09/DemoLifecycle';
import DemoCallAPI from './src/Buoi09/DemoCallAPI';
import DemoAxios from './src/Buoi10/DemoAxios';
import ListProductScreen from './src/Buoi10/ListProductScreen';
import OnboardScreen from './src/Buoi11_12/OnboardScreen';
import RootScreen from './src/Buoi11_12';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <DemoLifecycle /> */}
        <RootScreen />
      </Provider>
    );
  }
}

export default App;
