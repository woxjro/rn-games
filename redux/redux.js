// redux.js
import { combineReducers, createStore } from "redux";

// actions.js
export const deleteName = () => ({
    type: "DELETE_NAME",
    name: "",
});

// 引数nameをとり、{type: "ADD_NAME", name: name}を返すjsの関数。
export const setName = (name) => ({
    type: "SET_NAME",
    name: name,
});

const USER_INITIAL_STATE = {
    name: "unknown",
};

export const plusOne = (count) => {
    return {
        type: "PLUS_ONE",
        count: count + 1,
    };
};

const COUNT_INITIAL_STATE = {
    count: 0,
};

// reducers.js
const userReducer = (state = USER_INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.name };
        case "DELETE_NAME":
            return { ...state, name: "" };
        default:
            return state;
    }
};

const countReducer = (state = COUNT_INITIAL_STATE, action) => {
    switch (action.type) {
        case "PLUS_ONE":
            return { ...state, count: action.count };
        default:
            return state;
    }
};

export const reducers = combineReducers({
    user: userReducer,
    count: countReducer,
});

// store.js
export const store = createStore(reducers);

console.log("store called!");
