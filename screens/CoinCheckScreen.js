import React, { Component } from "react";
import { View, Text, ActivityIndicator, Button } from "react-native";

export default class CoinCheckScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            orderBooks: {},
            asksAvg: null,
            bidsAvg: null,
        };
    }

    fetchOrderBooks = async () => {
        try {
            await this.setState({ isLoading: true });
            let res = await fetch("https://coincheck.com/api/order_books");
            let jsn = await res.json();
            await console.log(JSON.stringify(jsn));
            await this.setState({ orderBooks: jsn });
            await this.calcAsksBidsAvg(this.state.orderBooks);
            await this.setState({ isLoading: false });
        } catch (error) {
            console.error(error);
        }
    };

    calcAsksBidsAvg = (orderBooks) => {
        let asksArray = orderBooks.asks;
        let bidsArray = orderBooks.bids;
        let asksSum = 0;
        let bidsSum = 0;

        asksArray.forEach((ask) => {
            asksSum += ask[0] * ask[1];
        });
        bidsArray.forEach((bid) => {
            bidsSum += bid[0] * bid[1];
        });
        this.setState({
            asksAvg: asksSum / asksArray.length,
            bidsAvg: bidsSum / bidsArray.length,
        });
    };

    componentDidMount() {
        this.fetchOrderBooks();
    }

    render() {
        const { isLoading, orderBooks } = this.state;
        return (
            <View>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <View>
                        <Text>asks:{this.state.asksAvg}</Text>
                        <Text>bids:{this.state.bidsAvg}</Text>
                        <Button
                            title="reload"
                            onPress={() => this.fetchOrderBooks()}
                        />
                    </View>
                )}
            </View>
        );
    }
}
