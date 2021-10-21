// React/ReactNative Stuffs
import React from 'react';
import {
  ScrollView
} from 'react-native';

// MyComponents
import { Message } from "../Message"

// Styles
import { styles } from './styles';

export function MessageList() {
  const message = {
    id: '1',
    text: 'Teste mensagem',
    user: {
      name: "Matheus Alecksander",
      avatar_url: "https://github.com/projetos-matheusalecksander.png"
    }
  }
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}