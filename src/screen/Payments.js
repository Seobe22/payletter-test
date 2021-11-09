import React, {useRef} from 'react';
import {View, SafeAreaView, Linking, Platform, Alert} from 'react-native';
import Webview from 'react-native-webview';
import SendIntentAndroid from 'react-native-send-intent';
const Payments = props => {
  const webviewRef = useRef();
  const payletterUrl = props.route.params.url;

  const alertOpenStoreOrApp = e => {
    console.log(e.url);
    Alert.alert(
      '알림',
      '해당 앱이 설치되지 않았다면, 플레이 스토어 설치 페이지로 이동합니다.',
      [
        {
          text: '확인',
          onPress: () => {
            Platform.OS === 'android' ? sendIntent() : openApp();
          },
        },
        {
          text: '취소',
          style: 'cancel',
        },
      ],
    );
    const sendIntent = () => {
      const url = e.url;
      SendIntentAndroid.openAppWithUri(url)
        .then(isOpened => {
          if (!isOpened) {
            console.log('앱 실행에 실패하였습니다.');
          }
        })
        .catch(error => console.log('android', error));
    };

    const openApp = () => {
      const url = e.url;
      Linking.openURL(url).catch(error => console.log('ios', error));
    };
  };

  const onShouldStartLoadWithRequest = e => {
    // console.log(e.url)
    if (e.url === 'http://mobile.vpay.co.kr/jsp/MISP/andown.jsp') {
      const support = Linking.canOpenURL(
        'market://details?id=kvp.jjy.MispAndroid320',
      );
      support ? Alert.alert('앱 실행 가능') : Alert.alert('앱 실행 불가');
      SendIntentAndroid.openAppWithUri(
        'market://details?id=kvp.jjy.MispAndroid320',
      )
        .then(isOpened => {
          if (!isOpened) {
            console.log('앱 실행에 실패하였습니다.');
          } else {
            console.log('앱 실행');
          }
        })
        .catch(error => console.log('android', error));

      return false;
    }
    if (
      e.url.startsWith('http://') ||
      e.url.startsWith('https://') ||
      e.url.startsWith('about:blank')
    ) {
      console.log('!' + e.url);
      return true;
    }
    if (Platform.OS === 'android') {
      alertOpenStoreOrApp(e);
      return false;
    } else {
      alertOpenStoreOrApp(e);
      return false;
    }
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView />
      <Webview
        ref={webviewRef}
        source={{uri: payletterUrl}}
        originWhitelist={['*']}
        onShouldStartLoadWithRequest={e => {
          return onShouldStartLoadWithRequest(e);
        }}
      />
      <SafeAreaView />
    </View>
  );
};

export default Payments;
