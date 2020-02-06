import React from 'react'

import { StyleSheet, View, Alert } from 'react-native'
import { Footer, FooterTab, Button, Text, Title } from 'native-base'

export default function NavBtns({ navigate }) {
  return (
    <View>
      <Title>If you feel like:</Title>
      <View style={styles.group}>
        <Button style={styles.btn} dark onPress={() => navigate('Eldest')}>
          <Text>eldest</Text>
        </Button>
        <Button style={styles.btn} dark onPress={() => navigate('Young')}>
          <Text>young</Text>
        </Button>
        <Button style={styles.btn} dark onPress={() => navigate('Flash')}>
          <Text>flash</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  group: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    textAlign: 'center',
  },
})
