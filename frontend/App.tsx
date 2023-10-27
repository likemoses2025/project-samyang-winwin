import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {scaleFontSize} from './src/assets/styles/scaling';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.font1}>
        고구마 개나리 오나리 독다리 팔다리 캥다리 오공기2
      </Text>
      <Text style={{fontSize: 30}}>
        고구마 개나리 오나리 독다리 팔다리 캥다리 오공기
      </Text>
      <MaterialCommunityIcons name="home" color={'#4F8EF7'} size={30} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  font1: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: scaleFontSize(30),
  },
});

export default App;
