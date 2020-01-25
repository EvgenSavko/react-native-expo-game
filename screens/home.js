import React from 'react'

import { StyleSheet, View, Alert } from 'react-native'
import { Button, Text, Content, Container } from 'native-base'

import MainLayuot from '../component/MainLayout'
import NavBtns from '../component/NavBtns'

export default function HomeScreen(props) {
  const { navigate } = props.navigation

  console.log(123, navigate)
  return (
    <MainLayuot>
      <Container>
        <Content>
          <View>
            <Button style={styles.btn} success onPress={() => Alert.alert('aboutPage')}>
              <Text>Go to About !</Text>
            </Button>
          </View>
        </Content>
        <NavBtns navigate={navigate} />
      </Container>
    </MainLayuot>
  )
}

const styles = StyleSheet.create({
  content: {
    overflow: 'hidden',
  },
  btn: {
    marginTop: 10,
  },
})
