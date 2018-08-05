import React, { Component } from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import Slides from "../components/Slides";
import _ from "lodash";
import { AppLoading } from "expo";

const SLIDE_DATA = [
  { text: "Welcome to JobApp", color: "#03A9F4" },
  { text: "Use this app to find jobs", color: "#009688" },
  { text: "Set your location, then swipe away", color: "#03A9F4" }
];

export default class WelcomeScreen extends Component {
  state = { token: null };

  async componentWillMount() {
    let token = await AsyncStorage.getItem("fb_token");

    if (token) {
      this.props.navigation.navigate("map");
      this.setState({ token: false });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate("auth");
  };

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

const styles = StyleSheet.create({});
