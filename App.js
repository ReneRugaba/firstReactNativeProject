import React from 'react';
import TaskScreen from './src/screens/tasks/index';
import {SafeAreaView} from 'react-native';






const App= () => {
  
  return (
    <SafeAreaView style={{flex:1}} >
      <TaskScreen/>
    </SafeAreaView>
  );
};



export default App;
