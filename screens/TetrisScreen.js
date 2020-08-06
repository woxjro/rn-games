import React, { Component } from "react";
import {
    Button,
    View,
    StyleSheet,
    Clipboard,
    TouchableOpacity,
    Text,
} from "react-native";
import Grid from "../components/grid";

export default class TetrisScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            str: "asdfasdf",
        };
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Grid w={10} h={20} />
                <TouchableOpacity
                    onLongPress={() => {
                        Clipboard.setString(this.state.str);
                    }}
                >
                    <View>
                        <Button
                            title="Go to Tetris again"
                            onPress={() => navigation.push("Tetris")}
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
                        />
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
