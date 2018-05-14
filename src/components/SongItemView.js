//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, CardItem, Button, Icon } from "native-base";
import Sound from "react-native-sound";

// create a component
const SongItemView = ({ trackObject }) => {
  const { title, artist, duration } = trackObject;

  Sound.setCategory("Playback");
  const SoundApi = new Sound(trackObject.PATH, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log("failed to load the sound", error);
      return;
    }
  });

  onPlay = () => {
    SoundApi.play(success => {
      if (success) {
        console.log("successfully finished playing");
      } else {
        console.log("playback failed due to audio decoding errors");
        SoundApi.reset();
      }
    });
  };

  onStop = () => {
    SoundApi.stop();
  };

  onPause = () => {
    SoundApi.pause();
  };
  return (
    <Card style={styles.container}>
      <View>
        <Image
          style={{
            width: 50,
            height: 50
          }}
          source={require("../assets/ab1.png")}
        />
      </View>
      <View style={styles.primarytextcontainer}>
        <Text style={styles.tracknametext}>{trackObject.TITLE}</Text>
        <View style={styles.secondarytextconatianer}>
          <Text>{trackObject.ARTIST}</Text>
          <Text>{trackObject.DURATION}</Text>
        </View>
        <View style={styles.buttonconatianer}>
          <Button  bordered
          onPress={this.onPlay}>
            <Icon type='FontAwesome' name='play'/>
          </Button>
          <Button bordered 
          onPress={this.onPause}>
          <Icon type='FontAwesome' name='pause'/>
          </Button>
          <Button bordered
          onPress={this.onStop}>
          <Icon type='FontAwesome' name='stop'/>
          </Button>
        </View>
      </View>
    </Card>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "white"
  },
  primarytextcontainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 10
  },
  secondarytextconatianer: {
    flexDirection: "row"
  },
  tracknametext: {
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonconatianer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

//make this component available to the app
export default SongItemView;
