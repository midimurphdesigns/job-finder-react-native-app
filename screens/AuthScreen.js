import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class AuthScreen extends Component {
  componentDidMount = () => {
    this.props.facebookLogin();
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
