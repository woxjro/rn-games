import React, { Component } from "react";
import HomeScreen from "./screens/HomeScreen";
import TetrisScreen from "./screens/TetrisScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

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
