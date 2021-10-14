import React from 'react';
import TaskScreen from './src/screens/tasks/index';
import {SafeAreaView} from 'react-native';
import {Provider} from "react-redux"
import { store } from './src/redux/store';





const App= () => {
  
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}} >
        <TaskScreen/>
      </SafeAreaView>
    </Provider>
  );
};



export default App;
