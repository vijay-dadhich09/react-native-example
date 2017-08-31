import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.viewStyle}>
          <Header headerText="Tech Stack1" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
const styles = {
  viewStyle: {
    flex: 1
  }
};
export default App;
