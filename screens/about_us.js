import React from "react";

import { StyleSheet, Text } from "react-native";
import { Button, Text as TextBase } from "native-base";

import MainLayuot from "./../component/MainLayout";

export default function AboutUs() {
  return (
    <MainLayuot>
      <Text style={styles.title}>AboutUs !</Text>
      <Text>Junior developer xxx xxx</Text>
      <Text>Device iPhone X 607010</Text>

      <View>
        <Button style={styles.btn} success>
          <TextBase>Click Me!2</TextBase>
        </Button>
      </View>
    </MainLayuot>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold"
  },
  btn: {
    marginTop: 10
  }
});
