import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Clipboard,
    TouchableOpacity,
    Text,
} from "react-native";
import CreateBlock from "./components/create_block";
import Grid from "./components/grid";
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            str: "asdfasdf",
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Grid w={10} h={20} />
                <TouchableOpacity
                    onLongPress={() => {
                        Clipboard.setString(this.state.str);
                    }}
                >
                    <View>
                        <Text
                            style={{
                                color: "red",
                                fontSize: 14,
                                fontFamily: "Arial",
                                fontStyle: "bold",
                                textAlign: "center",
                                marginTop: 3,
                                marginLeft: 25,
                                marginBottom: 17,
                            }}
                        >
                            {this.state.str}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
