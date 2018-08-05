import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

export default class Slides extends Component {
  renderSlides() {
    return this.props.data.map(slide => {
      return (
        <View key={slide.text} style={styles.slideStyle}>
          <Text style={styles.textStyle}>{slide.text}</Text>
        </View>
      );
    });
  }
  render() {
    return (
      <ScrollView horizontal style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 30
  }
});
