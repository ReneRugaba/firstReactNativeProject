import React from 'react';
import TaskScreen from './src/screens/tasks/index';
import {SafeAreaView, StyleSheet} from 'react-native';






const App= () => {
  
  return (
    <SafeAreaView >
      <TaskScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
