//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card, CardItem, Button, Icon, Right } from "native-base";

// create a component
class PlayListItemView extends Component {
  render() {
    return (
      <Card style={{ height: 220, padding: 10 }}>
        <View>
          <Image
            style={{ height: 140, width: null }}
            source={require("../assets/ab1.png")}
          />
          <View
            style={{
              marginLeft: 5,
              marginTop: 5,
              flexDirection: "row",
              alignContent: "center"
            }}
          >
            <View>
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 18,
                  marginBottom: 5
                }}
              >
                Playlist Name
              </Text>
              <Text>10 tracks </Text>
            </View>

            <Right>
              <Button transparent>
                <Icon
                  type="FontAwesome"
                  name="play-circle-o"
                  style={{
                    fontSize: 40,
                    color: "#29b6f6"
                  }}
                />
              </Button>
            </Right>
          </View>
        </View>
      </Card>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default PlayListItemView;

