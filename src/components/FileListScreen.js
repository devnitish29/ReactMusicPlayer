//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, NativeModules } from "react-native";
import SongItemView from "./SongItemView";

const TestModule = NativeModules.FILEACCESS;

// create a component
class FileListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
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

  renderTracks() {
    return this.state.tracks.map(track => <SongItemView key={track.TRACK_ID} trackObject={track}/>);
  }

  render() {
    return (
      <ScrollView style={{ margin: 10 }}>
      {this.renderTracks()}
      </ScrollView>


    )
  };



}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});

//make this component available to the app
export default FileListScreen;

