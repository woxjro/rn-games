import React, { Component } from "react";
import { Text, StyleSheet, View, Switch } from "react-native";

export default class StylePlayGround2Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <View
                    style={{ ...styles.item, backgroundColor: "aqua" }}
                ></View>
                <View
                    style={{ ...styles.item, backgroundColor: "aquamarine" }}
                ></View>
                <View
                    style={{ ...styles.item, backgroundColor: "dodgerblue" }}
                ></View>
                <View
                    style={{
                        ...styles.item,
                        backgroundColor: "cornflowerblue",
                    }}
                ></View>

                <View
                    style={{ ...styles.item, backgroundColor: "powderblue" }}
                ></View>
                <View
                    style={{ ...styles.item, backgroundColor: "skyblue" }}
                ></View>
                <View
                    style={{ ...styles.item, backgroundColor: "steelblue" }}
                ></View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    item: {
        width: 40,
        height: 40,
        backgroundColor: "blue",
    },
});
