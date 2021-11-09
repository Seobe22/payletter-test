import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {postPayletter} from '../modules/payletter';
import axios from 'axios';
import {useNavigation} from '@react-navigation/core';

const Details = props => {
  const navigation = useNavigation();

  const pickerRef = useRef();
  const data = props.route.params;
  const [selectedName, setSelectedName] = useState('creditcard');
  const moveScreen = url => {
    navigation.navigate('Payments', url);
  };
  const requestPayments = async (payment, name, price) => {
    const requestPayUrl = await axios({
      method: 'POST',
      url: 'https://testpgapi.payletter.com/v1.0/payments/request',
      headers: {
        Authorization: 'PLKEY MTFBNTAzNTEwNDAxQUIyMjlCQzgwNTg1MkU4MkZENDA=',
      },
      data: {
        pgcode: payment,
        user_id: 'test_user_id',
        user_name: '테스터',
        service_name: '페이레터',
        client_id: 'pay_test',
        order_no: '1234567890',
        amount: price,
        taxfree_amount: 100,
        tax_amount: 20,
        product_name: name,
        email_flag: 'Y',
        email_addr: 'payletter@payletter.com',
        autopay_flag: 'N',
        receipt_flag: 'Y',
        custom_parameter: 'this is custom parameter',
        return_url: 'https://testpg.payletter.com/result',
        callback_url: 'https://testpg.payletter.com/callback',
        cancel_url: 'https://testpg.payletter.com/cancel',
      },
    })
      .then(res => {
        const payLink = res.data.mobile_url;
        return payLink;
      })
      .catch(error => console.log(error));

    try {
      moveScreen({url: requestPayUrl});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>구매 상품 : {data.title}</Text>
        <Text>구매 가격 : {data.price}원</Text>
        <Picker
          style={{width: 300}}
          ref={pickerRef}
          selectedValue={selectedName}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedName(itemValue);
          }}>
          <Picker.Item label="신용카드" value="creditcard" />
          <Picker.Item label="카카오 페이" value="kakaopay" />
          <Picker.Item label="인터넷뱅킹(금융결제원)" value="banktransfer" />
          <Picker.Item label="휴대폰" value="mobile" />
        </Picker>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            requestPayments(
              `${selectedName}`,
              `${data.title}`,
              `${data.price}`,
            );
          }}>
          <Text style={{color: '#ffffff'}}>결제하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3e3e3e',
  },
});
export default Details;
