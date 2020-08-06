const types = ["I", "O", "T", "S", "Z", "J", "L"];
const colors = [
    "yellow",
    "purple",
    "red",
    "blue",
    "orange",
    "green",
    "skyblue",
];

export function createRandomBlock() {
    var object = {
        type: types[getRandomInt(0, 7)],
        color: colors[getRandomInt(0, 7)],
    };

    return object;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
