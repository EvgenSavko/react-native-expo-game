import React from 'react'

import { StyleSheet, Text } from 'react-native'
// import { Button, Text as TextBase } from 'native-base'

import MainLayuot from '../component/MainLayout'

export default function Flash() {
  return (
    <MainLayuot>
      <Text style={styles.title}>Flash !</Text>
      <NavBtns />
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
