import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class ReviewScreen extends Component {
  static navigationOptions = {
    title: "Review Jobs",
    headerRight: <Text>Go Right</Text>
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
