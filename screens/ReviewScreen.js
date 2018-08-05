import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

export default class ReviewScreen extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      headerTitle: "Review Jobs",
      headerRight: (
        <Button
          title="Settings"
          onPress={() => navigate("settings")}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0, 125, 125, 1)"
        />
      )
    };
  };

  render() {
    return (
      <View>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
