import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to JobApp" },
  { text: "Set your location, then swipe away" }
];

export default class WelcomeScreen extends Component {
  render() {
    return <Slides data={SLIDE_DATA} />;
  }
}

const styles = StyleSheet.create({});
