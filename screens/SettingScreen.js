import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";
import { plusOne, setName } from "../redux/redux";

function SettingsScreen({ navigation, state, plusOne, setName }) {
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
            <Text>now name is {state.user.name}</Text>
            <Button
                title="+1"
                onPress={() => {
                    plusOne(Math.floor(Math.random() * 100));
                    setTimeout(() => setCount(count + 1), 2000);
                    setName(getRandomString());
                }}
            />
        </View>
    );
}

const getRandomString = () => {
    const str =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const MIN = 0;
    const MAX = str.length;
    let res = "";
    for (let i = 0; i < 20; i++) {
        res += str[Math.floor(Math.random() * (MAX - MIN)) + MIN];
    }
    return res;
};

const mapStateToProps = (state) => {
    return { state: state };
};
const mapDispatchToProps = (dispatch) => {
    return {
        plusOne: (count) => {
            dispatch(plusOne(count));
        },
        setName: (name) => {
            dispatch(setName(name));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
