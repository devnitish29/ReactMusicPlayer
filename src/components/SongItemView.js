//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, CardItem } from "native-base";

// create a component
class SongItemView extends Component {
    render() {
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
                    <Text style={styles.tracknametext}>Track Name</Text>
                    <View style={styles.secondarytextconatianer}>
                        <Text>Artist Name </Text>
                        <Text> 5:00</Text>
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
        padding:10,
        flexDirection: 'row',
        backgroundColor: "white"
    },
    primarytextcontainer: {
        flexDirection: 'column',
        justifyContent:'space-around', 
        marginLeft:10
    },
    secondarytextconatianer: {
        flexDirection: 'row'
    },
    tracknametext: {
        fontSize: 18,
        fontWeight: 'bold'
    }

});

//make this component available to the app
export default SongItemView;

