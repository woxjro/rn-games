import React, { Component, useState } from "react";
import { View, StyleSheet } from "react-native";

export default class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size,
            color: props.color,
            borderWidth: props.borderWidth,
        };
    }

    changeColor(color) {
        this.setState({ color: color });
    }

    render() {
        const { color, size, borderWidth } = this.state;
        return (
            <View
                style={[
                    styles.cell,
                    {
                        backgroundColor: color,
                        width: size,
                        height: size,
                        borderWidth: borderWidth,
                    },
                ]}
            ></View>
        );
    }
}

const styles = StyleSheet.create({
    cell: {
        borderColor: "black",
    },
});
