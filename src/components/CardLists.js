import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';

const data = [
  {
    key: 1,
    title: '넷플릭스 구매권',
    comment: '넷플릭스 한달 구매권입니다.',
    price: '15000',
  },
  {
    key: 2,
    title: '라프텔 구매권',
    comment: '라프텔 한달 구매권입니다.',
    price: '12000',
  },
  {
    key: 3,
    title: '왓챠 구매권',
    comment: '왓챠 한달 구매권입니다.',
    price: '14000',
  },
  {
    key: 4,
    title: '티빙 구매권',
    comment: '티빙 한달 구매권입니다.',
    price: '18000',
  },
];
const Card = ({title, comment, price, onPress}) => (
  <TouchableOpacity style={styles.Container} onPress={onPress}>
    <Text>{title}</Text>
    <Text>{comment}</Text>
    <Text>{price}원</Text>
  </TouchableOpacity>
);
const CardLists = () => {
    const navigation = useNavigation();
  const renderItem = ({item}) => (
    <Card
      key={item.key}
      title={item.title}
      comment={item.comment}
      price={item.price}
      onPress={() => navigation.navigate('Details', item)}
    />
  );
  return (
    <View style={styles.Grid}>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'gray',
    width: '100%',
    minWidth: '90%',
    height: 70,
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
  },
  Grid: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    paddingVertical : 50
  },
});

export default CardLists;
