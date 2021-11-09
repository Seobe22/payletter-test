import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Card from '../components/Card';
import CardLists from '../components/CardLists';

const Home = () => {
  return (
        <CardLists /> 
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection : 'row',
    paddingVertical: 20,
    justifyContent : 'space-evenly',
    flexWrap : 'wrap'
  },
});
export default Home;
