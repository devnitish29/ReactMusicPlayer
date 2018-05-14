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
import { Container, Content } from "native-base";
import FileListScreen from "./src/components/FileListScreen";
import AlbumsScreen from "./src/components/AlbumsScreen"; 
import ArtistsScreen from "./src/components/ArtistsScreen";
import PlayListScreen from "./src/components/PlayListScreen";
import GenresScreen from "./src/components/GenresScreen";
import SmallPlayerView from "./src/components/SmallPlayerView";

import { TabNavigator } from "react-navigation";

const TestModule = NativeModules.FILEACCESS;

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tracks: {}
  //   };
  // }

  // componentDidMount() {
  //   this.message();
  // }

  // message = () => {
  //   TestModule.getMusicFilePath(msg => {
  //     this.setState({
  //       tracks: msg
  //     });
  //   });
  // };

  render() {
    // console.log("==================================== New Tracks ");
    // console.log(this.state.tracks);
    // console.log("====================================New Tracks  ");
    return (
      <Container >
        
      <AppTabNavigator style={styles.tablayout}/>
      <SmallPlayerView style={styles.playerlayout}/>
      
    </Container>



      // <View>
      //   <FlatList
      //     data={this.state.tracks}
      //     renderItem={({ item }) => (
      //       <Text style={styles.welcome}> {item.TITLE} </Text>
      //     )}
      //     keyExtractor={(item, index) => item.TRACK_ID}
      //   />
      // </View>
    );
  }
}


const AppTabNavigator = TabNavigator(
  {
    PlayList: { screen: PlayListScreen },
    Artists: { screen: ArtistsScreen },
    Albums: { screen: AlbumsScreen },
    SONGS: { screen: FileListScreen },
    Genres: { screen: GenresScreen }
  },
  {
    tabBarPosition: "top",
    swipeEnabled: true,
    activeTintColor: "#fff",
    animationEnabled: true,
    style: {
      backgroundColor: "blue"
    },
    lazy: false,
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#fff"
      }
    }
  }
);



const styles = StyleSheet.create({

  welcome: {
    fontSize: 20,
    textAlign: "left",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  tablayout: {
    height: "90%",
    backgroundColor: "blue"
  },
  playerlayout: {
    height: "10%"
  }
});
