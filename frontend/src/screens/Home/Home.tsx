import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../assets/styles/globalStyle';
import style from './style';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
