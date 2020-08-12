import * as React from "react";
import { StyleSheet, View } from "react-native";

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
    return (
        <View style={styles.container}>
            <View style={styles.setting}></View>
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
