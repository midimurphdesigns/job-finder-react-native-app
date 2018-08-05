import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { MapView } from "expo";

export default class MapScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
