import React from 'react'

import { StyleSheet, View, Alert } from 'react-native'
import { Footer, FooterTab, Button, Text, Title } from 'native-base'

export default function NavBtns() {
  const navigate = name => {
    console.log(name)
    Alert.alert(name)
  }

  return (
    <View>
      <Title>If you feel like:</Title>
      <View style={styles.group}>
        <Button style={styles.btn} primary onPress={() => navigate('go to old')}>
          <Text>eldest</Text>
        </Button>
        <Button style={styles.btn} primary onPress={() => navigate('go to young')}>
          <Text>young</Text>
        </Button>
        <Button style={styles.btn} primary onPress={() => navigate('go to flash')}>
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
