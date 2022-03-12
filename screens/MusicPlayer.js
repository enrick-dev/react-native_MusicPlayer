import React from 'react'
import { View, Text, StyleSheet, SafeAreaView  } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const MusicPlayer = () => {
  return (
    <SafeAreaView style={style.container}>
        <View style={style.maincontainer}>
        {/* image */}
        </View>
    </SafeAreaView>
  )
}

export default MusicPlayer

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555',
    },
    maincontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})