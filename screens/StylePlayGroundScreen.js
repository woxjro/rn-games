import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class StylePlayGroundScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { itemsContainer: { flexDirection: "row" } };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.itemSettingsContainer}></View>
                <View style={styles.itemsContainer}>
                    <View style={styles.item1}>
                        <Text> Flex Item1</Text>
                    </View>
                    <View style={styles.item2}>
                        <Text> Flex Item2</Text>
                    </View>
                    <View style={styles.item3}>
                        <Text> Flex Item3</Text>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemSettingsContainer: {
        flex: 2,
    },
    itemsContainer: {
        flex: 4,
        flexDirection: "row",
        backgroundColor: "blue",
    },
    item1: {
        flex: 1,
        backgroundColor: "gray",
        padding: 20,
    },
    item2: {
        flex: 2,
        backgroundColor: "orange",
        padding: 20,
    },
    item3: {
        flex: 3,
        backgroundColor: "yellow",
        padding: 20,
    },
});
