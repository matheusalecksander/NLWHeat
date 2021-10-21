import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
}
  from "@expo-google-fonts/roboto"

import AppLoading from "expo-app-loading"

import { Home } from './src/screens/Home';

export default function App() {
  const [fonstLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fonstLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}