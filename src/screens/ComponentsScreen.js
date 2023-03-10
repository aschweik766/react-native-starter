import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const name = "Ashley"
  return (
    <View>
        <Text style={styles.textStyle}>Getting started with React Native</Text>
        <Text style={styles.yourNameStyle}>My name is {name}</Text>
       
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    },
    yourNameStyle: {
        fontSize: 20,
        color: "blue"
    }
})

export default ComponentsScreen