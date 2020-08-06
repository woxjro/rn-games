import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Cell from "./cell";
import { createRandomBlock } from "./helpers";
export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            w: props.w,
            h: props.h,
            grid: [],
            blocks: this.generateBlocks(),
            score: 0,
            wp: null,
            hp: null,
        };

        this.grid = [];
    }

    componentDidMount() {
        this.createGrid();
        this.generateBlocks();
        console.log(this.state.blocks);
    }

    //propsであたえられたｗ，ｈに従ってマス目の配列を作る,this.state.gridに格納
    createGrid = () => {
        const { w, h } = this.state;
        var grid = [];

        for (let ih = 0; ih < h; ih++) {
            var row = [];
            for (let jw = 0; jw < w; jw++) {
                row.push(0);
            }
            grid.push(row);
        }
        this.grid = grid;
        this.setState({ grid }, () => {});
    };

    checkColor(i, j) {
        var id = i + "," + j;
        console.log(this.refs[id].state.color);
        if (this.refs[id] == null) {
            return null;
        }
        return this.refs[id].state.color;
    }

    generateBlocks() {
        var blocks = [];
        for (let i = 0; i < 5; i++) {
            blocks.push({ id: i, ...createRandomBlock() });
        }
        console.log(blocks);
        this.setState({ blocks: blocks });
        return blocks;
    }

    renderCells() {
        var size = 24;
        // console.log('rendering grid');
        return this.state.grid.map((row, i) => {
            if (i < 4) {
                return (
                    <View key={i} style={{ height: 0, flexDirection: "row" }}>
                        {row.map((cell, j) => {
                            var color = "white";
                            return (
                                <TouchableOpacity
                                    key={j}
                                    onPress={() =>
                                        this.changeColor(i, j, "blue")
                                    }
                                >
                                    <Cell
                                        ref={i + "," + j}
                                        color={color}
                                        size={size}
                                    />
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                );
            }

            return (
                <View key={i} style={{ flexDirection: "row" }}>
                    {row.map((cell, j) => {
                        // console.log('color is:', cell)
                        var color = "white";
                        if (cell == 1) {
                            color = "blue";
                        } else if (cell == 2) {
                            color = "green";
                        }

                        if (i < 4) {
                            color = "red";
                        }

                        return (
                            <TouchableOpacity
                                key={j}
                                onPress={() => {
                                    return; //production
                                    this.changeColor(i, j, "blue");
                                }}
                            >
                                <Cell
                                    ref={i + "," + j}
                                    borderWidth={1}
                                    color={color}
                                    size={size}
                                />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            );
        });
    }

    renderCellsTest2 = () => {
        console.log(this.state.grid);

        return (
            <View style={{ backgroundColor: "white" }}>
                {this.state.grid.map((row, i) => {
                    return (
                        <View style={{ flexDirection: "row" }}>
                            {row.map((cell, j) => {
                                if (cell == 1) {
                                    return (
                                        <TouchableOpacity>
                                            <Cell
                                                ref={`${i},${j}`}
                                                key={j}
                                                size={25}
                                                color={"black"}
                                                borderWidth={0.5}
                                            />
                                        </TouchableOpacity>
                                    );
                                } else if (cell == 0) {
                                    return (
                                        <TouchableOpacity>
                                            <Cell
                                                ref={`${i},${j}`}
                                                key={j}
                                                size={25}
                                                color={"#dcdcdc"}
                                                borderWidth={0.5}
                                            />
                                        </TouchableOpacity>
                                    );
                                }
                            })}
                        </View>
                    );
                })}
            </View>
        );
    };

    changeColor(i, j, color) {
        var id = i + "," + j;
        var bin = color == "white" ? 0 : 1;

        this.grid[i][j] = bin;
        this.refs[id].changeColor(color); //cell componentのmethod
    }

    loadNextBlock() {
        var { blocks } = this.state;
        var next = blocks.splice(0, 1)[0]; //spliceは配列を返すため、JSONを取り出す
        console.log(next);

        this.setState(() => {
            return { hp: 2, wp: 3 };
        });
        console.log(this.state);

        if (next.type == "I") {
            this.changeColor(3, 3, next.color);
            this.changeColor(3, 4, next.color);
            this.changeColor(3, 5, next.color);
            this.changeColor(3, 6, next.color);
        } else if (next.type == "O") {
            this.changeColor(2, 4, next.color);
            this.changeColor(2, 5, next.color);
            this.changeColor(3, 4, next.color);
            this.changeColor(3, 5, next.color);
        } else if (next.type == "T") {
            this.changeColor(2, 4, next.color);
            this.changeColor(3, 3, next.color);
            this.changeColor(3, 4, next.color);
            this.changeColor(3, 5, next.color);
        } else if (next.type == "S") {
            this.changeColor(2, 4, next.color);
            this.changeColor(2, 5, next.color);
            this.changeColor(3, 3, next.color);
            this.changeColor(3, 4, next.color);
        } else if (next.type == "Z") {
            this.changeColor(2, 3, next.color);
            this.changeColor(2, 4, next.color);
            this.changeColor(3, 4, next.color);
            this.changeColor(3, 5, next.color);
        } else if (next.type == "J") {
            this.changeColor(2, 3, next.color);
            this.changeColor(3, 3, next.color);
            this.changeColor(3, 4, next.color);
            this.changeColor(3, 5, next.color);
        } else if (next.type == "L") {
            this.changeColor(2, 5, next.color);
            this.changeColor(3, 3, next.color);
            this.changeColor(3, 4, next.color);
            this.changeColor(3, 5, next.color);
        }
    }

    canShift(hp, wp, direction) {
        const { h, w } = this.state;
        var isHpInGrid = 0 <= hp && hp <= h - 4;
        var isWpInGrid = 0 < wp && wp <= w - 4;
        return isHpInGrid && isWpInGrid ? true : false;
    }

    shift(hp, wp, direction) {
        if (!this.canShift(hp, wp, direction)) return;
        var shift = direction == "right" || direction == "down" ? 1 : -1;
        if (direction == "right") {
            for (let ih = hp; ih < hp + 4; ih++) {
                for (let jw = wp + 3; wp <= jw; jw--) {
                    if (this.checkColor(ih, jw) != "#dcdcdc") {
                        this.changeColor(
                            ih,
                            jw + shift,
                            this.checkColor(ih, jw)
                        );
                        this.changeColor(ih, jw, "#dcdcdc");
                    }
                }
            }
        } else if (direction == "left") {
            for (let ih = hp; ih < hp + 4; ih++) {
                for (let jw = wp; jw < wp + 4; jw++) {
                    if (this.checkColor(ih, jw) != "#dcdcdc") {
                        this.changeColor(
                            ih,
                            jw + shift,
                            this.checkColor(ih, jw)
                        );
                        this.changeColor(ih, jw, "#dcdcdc");
                    }
                }
            }
        } else if (direction == "down") {
            for (let ih = hp + 3; hp <= ih; ih--) {
                for (let jw = wp + 3; wp <= jw; jw--) {
                    if (this.checkColor(ih, jw) != "#dcdcdc") {
                        this.changeColor(
                            ih + shift,
                            jw,
                            this.checkColor(ih, jw)
                        );
                        this.changeColor(ih, jw, "#dcdcdc");
                    }
                }
            }
        }
        if (direction == "right" || direction == "left") {
            this.setState(() => {
                return { hp: hp, wp: wp + shift };
            });
        } else if (direction == "down") {
            this.setState(() => {
                return { hp: hp + shift, wp: wp };
            });
        }
    }

    renderButtons() {
        return (
            <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
                <TouchableOpacity
                    onPress={() => {
                        this.shift(this.state.hp, this.state.wp, "left");
                    }}
                >
                    <Icon name="hand-o-left" size={50} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        this.shift(this.state.hp, this.state.wp, "down");
                    }}
                >
                    <Icon name="hand-o-down" size={50} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>
                        this.shift(this.state.hp, this.state.wp, "right")
                    }
                >
                    <Icon name="hand-o-right" size={50} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.loadNextBlock()}>
                    <Icon name="rotate-right" size={50} />
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "space-around" }}>
                <View
                    style={{
                        paddingTop: 40,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity>
                        <Text style={{ fontWeight: "700", fontSize: 26 }}>
                            tetris
                        </Text>
                    </TouchableOpacity>

                    <Text style={{ paddingTop: 10, fontSize: 16 }}>
                        Score: {this.state.score}
                    </Text>
                </View>
                <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                >
                    {this.renderCellsTest2()}
                    <View style={{ marginLeft: 20, alignItems: "center" }}>
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>
                            NEXT
                        </Text>
                    </View>
                </View>
                {this.renderButtons()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 50,
    },
});
