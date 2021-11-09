import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Card = (props) => {
    console.log(props)
  return (
    <TouchableOpacity style={styles.Container}>
      <Text>{props.title}</Text>
      <Text>{props.comment}</Text>
      <Text>{props.price}원</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'gray',
    width: 160,
    height: 240,
    borderRadius: 15,
    padding: 10,
    marginBottom : 19
  },
});

export default Card;
