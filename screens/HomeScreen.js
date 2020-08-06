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
                    title="Go to Tetris"
                    onPress={() => navigation.push("Tetris")}
                />
            </View>
        );
    }
}
