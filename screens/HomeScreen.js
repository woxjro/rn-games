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
                <Button
                    title="Test"
                    onPress={() =>
                        navigation.navigate("Test", {
                            item1: Math.floor(Math.random() * 100),
                            item2: "this is item2",
                        })
                    }
                />
                <Button
                    title="Coin Check"
                    onPress={() => navigation.navigate("CoinCheck")}
                />
                <Button
                    title="Tetris"
                    onPress={() => navigation.navigate("Tetris")}
                />
                <Button
                    title="Maps"
                    onPress={() => navigation.navigate("GoogleMap")}
                />
                <Button
                    title="StylePlayGround"
                    onPress={() => navigation.navigate("StylePlayGround")}
                />
            </View>
        );
    }
}
