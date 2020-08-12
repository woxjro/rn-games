import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function SettingsScreen({ navigation }) {
    const [count, setCount] = useState(0);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Settings!</Text>
            <Text>now count is {count}</Text>
            <Button title="+1" onPress={() => setCount(count + 1)} />
        </View>
    );
}
