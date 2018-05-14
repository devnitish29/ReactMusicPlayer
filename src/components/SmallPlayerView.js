//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Content,
  Container,
  Icon,
  Button,
  Left,
  Right,
  Body
} from "native-base";

// create a component
class SmallPlayerView extends Component {
  render() {
    return (
      <View style={styles.maincontainer}>
        <Container style={styles.container}>
          <Image
            source={require("../assets/ab1.png")}
            style={styles.coverthumbnail}
          />
          <View
            style={{
              marginLeft: 10
            }}
          >
            <Text style={styles.titletext}>Song Title</Text>
            <Text>Artist Name</Text>
          </View>
          <Right>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: "white",
                marginRight: 5
              }}
            >
              <Button style={styles.playerbuttons}>
                <Icon
                  type="FontAwesome"
                  name="step-backward"
                  style={{ color: "black" }}
                />
              </Button>
              <Button style={styles.playerbuttons}>
                <Icon
                  type="FontAwesome"
                  name="play"
                  style={{ color: "black" }}
                />
              </Button>
              <Button style={styles.playerbuttons}>
                <Icon
                  type="FontAwesome"
                  name="step-forward"
                  style={{ color: "black" }}
                />
              </Button>
            </View>
          </Right>
        </Container>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  maincontainer: {
    height: "10%",
    backgroundColor: "white"
  },
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  coverthumbnail: {
    marginLeft: 10,
    height: 60,
    width: 60
  },
  titletext: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5
  },
  playercontainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginRight: 5
  },
  playerbuttons: {
    backgroundColor: "white"
  }
});

//make this component available to the app
export default SmallPlayerView;

