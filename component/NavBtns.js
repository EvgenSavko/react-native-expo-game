import React from 'react'

import { StyleSheet, View, Alert } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'

export default function NavBtns() {
  const navigate = name => {
    console.log(name)
    Alert.alert(name)
  }

  return (
    <View style={styles.group}>
      <Container>
        <Footer>
          <FooterTab>
            <Button onPress={() => navigate('go to old')}>
              <Text style={styles.old_text}>old</Text>
            </Button>
            <Button onPress={() => navigate('go to young')}>
              <Text style={styles.young_text}>young</Text>
            </Button>
            <Button onPress={() => navigate('go to flash')}>
              <Text style={styles.flash_text}>flash</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  group: {
    display: 'flex',
    flexDirection: 'row',
  },
  flash_text: {
    color: 'red',
  },
  young_text: {
    color: 'green',
  },
  old_text: {
    color: 'brown',
  },
})
