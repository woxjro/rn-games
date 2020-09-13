import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";
import { plusOne, setName, deleteName } from "../redux/redux";
import { store } from "../redux/redux";
function SettingsScreen({
    navigation,
    state,
    counterPlusOne,
    userSetName,
    userDeleteName,
}) {
    const storeState = store.getState();
    const [count, setCount] = useState(0);
    const [now, setNow] = useState(new Date());
    useEffect(() => {
        setNow(new Date());
    }, [storeState.user.name]);
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
            <Text>now time is {now.toISOString()}</Text>
            <Button
                title="+1"
                onPress={() => {
                    counterPlusOne(Math.floor(Math.random() * 100));
                    setTimeout(() => setCount(count + 1), 2000);
                    console.log("mapStateToProps", state);
                    console.log("store.getState()", store.getState());
                }}
            />
            <Button
                title="set name"
                onPress={() => {
                    userSetName(getRandomString());
                }}
            />
            <Button
                title="delete name"
                onPress={() => {
                    userDeleteName(state.user.name);
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
        counterPlusOne: (count) => {
            dispatch(plusOne(count));
        },
        userSetName: (name) => {
            dispatch(setName(name));
        },
        userDeleteName: (name) => {
            dispatch(deleteName());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
