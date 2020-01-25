import React from 'react'

import { StyleSheet, Text, View, Alert } from 'react-native'
import { Button, Text as TextBase } from 'native-base'

import MainLayuot from '../component/MainLayout'
import NavBtns from '../component/NavBtns'

export default function Home(props) {
  const navigate = name => {
    console.log(name)
    Alert.alert(name)
  }
  return (
    <MainLayuot>
      <Text>Hello, Frontend from Web !</Text>
      <Text>Open up App.js to start working on your app!</Text>

      <View>
        <Button style={styles.btn} success onPress={() => navigate('aboutPage')}>
          <TextBase>Go to About !</TextBase>
        </Button>
      </View>
      <NavBtns />
    </MainLayuot>
  )
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
  },
})
