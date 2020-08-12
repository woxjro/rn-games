import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function StylePlayGround2Screen() {
    const colors = [
        "aqua",
        "aquamarine",
        "dodgerblue",
        "cornflowerblue",
        "powderblue",
        "skyblue",
        "steelblue",
    ];
    const flexDirectionType = [
        "row",
        "row-reverse",
        "column",
        "column-reverse",
    ];
    const justifyContentType = [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
    ];
    const alignItemsType = [
        "stretch",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
    ];
    return (
        <View style={styles.container}>
            <View style={styles.setting}>
                <View>
                    <Text>flexDirection</Text>
                    <View style={{ flexDirection: "row" }}>
                        {flexDirectionType.map((type, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.button}
                                    onPress={() => {}}
                                >
                                    <Text>{type}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
                <View>
                    <Text>justifyContent</Text>
                    <View style={{ flexDirection: "row" }}>
                        {justifyContentType.map((type, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.button}
                                    onPress={() => {}}
                                >
                                    <Text>{type}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
                <View>
                    <Text>alignItems</Text>
                    <View style={{ flexDirection: "row" }}>
                        {alignItemsType.map((type, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.button}
                                    onPress={() => {}}
                                >
                                    <Text>{type}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </View>
            <View style={styles.itemsContainer}>
                {colors.map((color, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                ...styles.item,
                                backgroundColor: color,
                            }}
                        ></View>
                    );
                })}
            </View>
        </View>
    );
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginLeft: 3,
    },
    setting: {
        marginTop: 10,
        marginBottom: 10,

        width: "100%",
        borderColor: "black",
        borderWidth: 1,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    itemsContainer: {
        flex: 2,
    },
    item: {
        width: 40,
        height: 40,
        backgroundColor: "blue",
    },
});
