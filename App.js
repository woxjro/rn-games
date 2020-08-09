import React, { Component } from "react";
import HomeScreen from "./screens/HomeScreen";
import TetrisScreen from "./screens/TetrisScreen";
import TestScreen from "./screens/TestScreen";
import SettingsScreen from "./screens/SettingScreen";
import GoogleMapScreen from "./screens/GoogleMapScreen";
import StylePlayGroundScreen from "./screens/StylePlayGroundScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons";

const Stack = createStackNavigator();

const HomeStack = createStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Test" component={TestScreen} />
            <HomeStack.Screen name="Tetris" component={TetrisScreen} />
            <HomeStack.Screen name="GoogleMap" component={GoogleMapScreen} />
            <HomeStack.Screen
                name="StylePlayGround"
                component={StylePlayGroundScreen}
            />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeStackScreen} />
                    <Tab.Screen
                        name="Settings"
                        component={SettingsStackScreen}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}
