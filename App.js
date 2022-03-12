import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MusicPlayer from './screens/MusicPlayer'
import { Component } from 'react/cjs/react.development'

const App = () => {
  return (
    <View style={style.container}>
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