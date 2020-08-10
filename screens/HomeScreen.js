import React, { Component } from "react";
import { Button, View, Text } from "react-native";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { navigation } = this.props;
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>Home Screen</Text>
                <Button
                    title="Go to Test"
                    onPress={() =>
                        navigation.navigate("Test", {
                            item1: Math.floor(Math.random() * 100),
                            item2: "this is item2",
                        })
                    }
                />
                <Button
                    title="Got to expo Camera"
                    onPress={() => navigation.navigate("ExpoCamera")}
                />
                <Button
                    title="Go to Tetris"
                    onPress={() => navigation.navigate("Tetris")}
                />
                <Button
                    title="Go to Maps"
                    onPress={() => navigation.navigate("GoogleMap")}
                />
                <Button
                    title="Go to StylePlayGround"
                    onPress={() => navigation.navigate("StylePlayGround")}
                />
            </View>
        );
    }
}
