import React, { Component } from "react";
import { Text, StyleSheet, View, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class AuthScreen extends Component {
  componentDidMount = () => {
    this.props.facebookLogin();
    AsyncStorage.removeItem("fb_token");
  };

  render() {
    return (
      <View>
        <Text> AuthScreen </Text>
        <Text> AuthScreen </Text>
        <Text> AuthScreen </Text>
        <Text> AuthScreen </Text>
        <Text> AuthScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default connect(
  null,
  actions
)(AuthScreen);
