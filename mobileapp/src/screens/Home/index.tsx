// React / ReactNative 
import React from 'react';
import {
  View
} from 'react-native';

// Styles
import { styles } from './styles';

// MyComponents
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SignInBox } from '../../components/SignInBox';
import { SendMessageForm } from '../../components/SendMessageForm';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />

      <SignInBox />
    </View>
  );
}
