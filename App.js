/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  NativeModules,
  TouchableOpacity,
  FlatList,
  View
} from "react-native";

const TestModule = NativeModules.FILEACCESS;

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: {}
    };
  }

  componentDidMount() {
    this.message();
  }

  message = () => {
    TestModule.getMusicFilePath(msg => {
      this.setState({
        tracks: msg
      });
    });
  };

  render() {
    console.log("==================================== New Tracks ");
    console.log(this.state.tracks);
    console.log("====================================New Tracks  ");
    return (
      <View>
        <FlatList
          data={this.state.tracks}
          renderItem={({ item }) => (
            <Text style={styles.welcome}> {item.TITLE} </Text>
          )}
          keyExtractor={(item, index) => item.TRACK_ID}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "left",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
