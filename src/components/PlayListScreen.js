//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PlayListItemView from "./PlayListItemView";
import SongItemView from "./SongItemView";
// create a component
class PlayListScreen extends Component {

render() {

    return (
        <ScrollView style={{ margin: 10 }}>

            <PlayListItemView />
            <PlayListItemView />
            <PlayListItemView />
            <PlayListItemView />
            <PlayListItemView />
            <PlayListItemView />
            <PlayListItemView />
            <PlayListItemView />
            <PlayListItemView />
        </ScrollView>


    );
}
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
export default PlayListScreen;

