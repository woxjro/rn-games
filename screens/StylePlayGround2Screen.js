import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function StylePlayGround2Screen() {
    const [flexDirectionType, setFlexDirectionType] = useState("column");
    const [justifyContentType, setJustifyContentType] = useState("flex-start");
    const [alignItemsType, setAlignItemsType] = useState("stretch");

    const colors = [
        "aqua",
        "aquamarine",
        "dodgerblue",
        "cornflowerblue",
        "powderblue",
        "skyblue",
        "steelblue",
    ];
    const flexDirectionTypes = [
        "row",
        "row-reverse",
        "column",
        "column-reverse",
    ];
    const justifyContentTypes = [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
    ];
    const alignItemsTypes = [
        "stretch",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
    ];
    useEffect(() => {
        styles.itemsContainer = {
            ...styles.itemsContainer,
            flexDirection: flexDirectionType,
            justifyContent: justifyContentType,
            alignItems: alignItemsType,
        };
    });
    return (
        <View style={styles.container}>
            <View style={styles.setting}>
                <View>
                    <Text>flexDirection:{flexDirectionType}</Text>
                    <View style={{ flexDirection: "row" }}>
                        {flexDirectionTypes.map((type, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.button}
                                    onPress={() => {
                                        setFlexDirectionType(type);
                                    }}
                                >
                                    <Text>{type}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
                <View>
                    <Text>justifyContent:{justifyContentType}</Text>
                    <View style={{ flexDirection: "row" }}>
                        {justifyContentTypes.map((type, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.button}
                                    onPress={() => {
                                        setJustifyContentType(type);
                                    }}
                                >
                                    <Text>{type}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
                <View>
                    <Text>alignItems:{alignItemsType}</Text>
                    <View style={{ flexDirection: "row" }}>
                        {alignItemsTypes.map((type, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.button}
                                    onPress={() => {
                                        setAlignItemsType(type);
                                    }}
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
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    itemsContainer: {
        flex: 4,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
    },
    item: {
        width: 40,
        height: 40,
        backgroundColor: "blue",
    },
});
