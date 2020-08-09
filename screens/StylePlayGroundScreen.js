import React, { Component } from "react";
import { Text, StyleSheet, View, Switch } from "react-native";
//import CheckBox from "@react-native-community/checkbox";

export default class StylePlayGroundScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { isFlexDirectionColumn: true };
    }
    render() {
        const { isFlexDirectionColumn } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.itemSettingsContainer}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ fontSize: 18 }}>flexDirection:</Text>
                        <Text style={{ fontSize: 18 }}>
                            {isFlexDirectionColumn ? "(column)" : "(row)"}
                        </Text>
                        <Switch
                            value={isFlexDirectionColumn}
                            onValueChange={() => {
                                this.setState({
                                    isFlexDirectionColumn: !isFlexDirectionColumn,
                                });
                            }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        ...styles.itemsContainer,
                        flexDirection: isFlexDirectionColumn ? "column" : "row",
                    }}
                >
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
        justifyContent: "center",
        flex: 2,
    },
    checkboxContainer: {
        flexDirection: "column",
        marginBottom: 20,
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
