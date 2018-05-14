//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SongItemView from "./SongItemView";

// import RNFS from "react-native-fs";

// create a component
class FileListScreen extends Component {

  render() {
    return (
      <ScrollView style={{ margin: 10 }}>
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
        <SongItemView />
      </ScrollView>
        
   
    )};



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

