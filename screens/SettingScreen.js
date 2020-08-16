import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";

function SettingsScreen({ navigation, state }) {
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
            <Button
                title="+1"
                onPress={() => {
                    console.log(state);
                    setCount(count + 1);
                }}
            />
        </View>
    );
}

const mapStateToProps = (state) => {
    return { state: state };
};
const mapDispatchToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
