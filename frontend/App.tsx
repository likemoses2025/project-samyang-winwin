import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {scaleFontSize} from './src/assets/styles/scaling';
import MainNavigation from './src/navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  font1: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: scaleFontSize(30),
  },
});

export default App;
