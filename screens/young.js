import React, { useEffect, useState } from 'react'

import { StyleSheet, View, Dimensions } from 'react-native'
import { Button, Text, Content, Container } from 'native-base'

import MainLayuot from '../component/MainLayout'
import NavBtns from '../component/NavBtns'

export default function YoungScreen(props) {
  const { navigate } = props.navigation
  const [counter, setCounter] = useState(0)
  const [start, setStart] = useState(false)
  const [margin, setMargin] = useState({ top: 0, left: 0 })

  useEffect(() => {
    let interval = setInterval(() => {
      start && getRundom()
    }, 450)

    if (counter > 15) {
      setMargin({ top: 25, left: 25 })
      setStart(false)
      setCounter(0)
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  })

  function getRundom() {
    const { height, width } = Dimensions.get('screen')
    const w = randomInt(0, width - 30)
    const h = randomInt(0, height - 60)
    setMargin({ top: h, left: w })
  }

  function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random())
  }
  return (
    <MainLayuot>
      <Container>
        <Text>counter : {counter}</Text>
        <Content>
          <View style={{ position: 'absolute', top: margin.top, left: margin.left }}>
            <Button
              style={styles.btn}
              warning
              onPress={() => {
                setStart(true)
                setCounter(counter + 1)
                getRundom()
                console.log(start)
              }}
            >
              <Text>Go</Text>
            </Button>
          </View>
        </Content>
        <NavBtns navigate={navigate} />
      </Container>
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
