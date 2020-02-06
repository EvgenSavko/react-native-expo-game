import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function MainLayout(props) {
  return <View style={styles.container}>{props.children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 25,
  },
})
