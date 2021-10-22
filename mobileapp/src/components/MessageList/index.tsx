// React/ReactNative Stuffs
import React, { useState, useEffect } from 'react';
import {
  ScrollView
} from 'react-native';
import { api } from '../../services/api';
import { io } from "socket.io-client"

// MyComponents
import { Message, MessageProps } from "../Message"

// Styles
import { styles } from './styles';

let messageQueue: MessageProps[] = []

const socket = io(String(api.defaults.baseURL))
socket.on('new_message', (newMessage) => {
  messageQueue.push(newMessage)
})

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([])

  useEffect(() => {
    async function fetchMessages() {
      const messageResponse = await api.get<MessageProps[]>("/messages/last3")
      setCurrentMessages(messageResponse.data)
    }

    fetchMessages()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (messageQueue.length > 0) {
        setCurrentMessages(prevState => [messageQueue[0], prevState[0], prevState[1]])
        messageQueue.shift()
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map((message) => <Message key={message.id} data={message} />)}
    </ScrollView>
  );
}