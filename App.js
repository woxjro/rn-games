import React, { Component } from "react";
import {
    Button,
    View,
    StyleSheet,
    Clipboard,
    TouchableOpacity,
    Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Grid from "./components/grid";

const Stack = createStackNavigator();

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

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Tetris" component={TetrisScreen} />
                </Stack.Navigator>
            </NavigationContainer>
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
