import React from 'react'

import { StyleSheet, Text } from 'react-native'
// import { Button, Text as TextBase } from 'native-base'

import MainLayuot from '../component/MainLayout'
import NavBtns from '../component/NavBtns'

export default function FlashScreen(props) {
  const { navigate } = props.navigation
  return (
    <MainLayuot>
      <Text style={styles.title}>Flash !</Text>
      <NavBtns navigate={navigate} />
    </MainLayuot>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  btn: {
    marginTop: 10,
  },
})
