import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import MusicPlayer from './screens/MusicPlayer'
import { Component } from 'react/cjs/react.development'

const App = () => {
  return (
    <View style={style.container}>
      <StatusBar barStyle='black-content' />
      <MusicPlayer />
    </View>
  )
}

export default App

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
})