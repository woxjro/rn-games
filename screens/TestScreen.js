import React, { Component } from "react";
import { View, Text } from "react-native";
export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { navigation } = this.props;
        const { item1, item2 } = this.props.route.params;

        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>Test Screen</Text>
                <Text>{item1}</Text>
                <Text>{item2}</Text>
            </View>
        );
    }
}
