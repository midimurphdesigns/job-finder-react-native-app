import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to JobApp", color: "#03A9F4" },
  { text: "Use this app to find jobs", color: "#009688" },
  { text: "Set your location, then swipe away", color: "#03A9F4" }
];

export default class WelcomeScreen extends Component {
  render() {
    return <Slides data={SLIDE_DATA} />;
  }
}

const styles = StyleSheet.create({});
