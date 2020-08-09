import React, { Component } from "react";
import { Text } from "react-native";
import MapView from "react-native-maps";

export default class GoogleMapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <MapView style={{ flex: 1 }} />;
    }
}
