import React from 'react'

import { StyleSheet, View, Alert } from 'react-native'
import { Button, Text, Content, Container } from 'native-base'

import MainLayuot from '../component/MainLayout'
import NavBtns from '../component/NavBtns'

export default function YoungScreen(props) {
  const { navigate } = props.navigation
  return (
    <MainLayuot>
      <Content>
        <View>
          <Button style={styles.btn} success onPress={() => Alert.alert('aboutPage')}>
            <Text>Go to About !</Text>
          </Button>
        </View>
      </Content>
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
