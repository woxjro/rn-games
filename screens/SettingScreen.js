import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";
import { plusOne } from "../redux/redux";

function SettingsScreen({ navigation, state, plusOne }) {
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
            <Text>now count is {count} (hooks)</Text>
            <Text>now count is {state.count.count} (redux)</Text>
            <Button
                title="+1"
                onPress={() => {
                    plusOne(count);
                    setTimeout(() => setCount(count + 1), 2000);
                }}
            />
        </View>
    );
}

const mapStateToProps = (state) => {
    return { state: state };
};
const mapDispatchToProps = (dispatch) => {
    return {
        plusOne: (count) => {
            dispatch(plusOne(count));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
