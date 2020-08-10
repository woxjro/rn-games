import React, { Component } from "react";
import { ActivityIndicator, Button, View, Text, FlatList } from "react-native";
export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        };
    }

    fetchData = () => {
        fetch("https://reactnative.dev/movies.json")
            .then((res) => res.json())
            .then((json) => this.setState({ data: json.movies }))
            .catch((error) => console.error(error))
            .finally(() => this.setState({ isLoading: false }));
    };

    asyncAwaitFetchData = async () => {
        try {
            await this.setState({ isLoading: true });
            let res = await fetch("https://reactnative.dev/movies.json");
            let jsn = await res.json();
            await this.setState({ data: jsn.movies });
            await this.setState({ isLoading: false });
        } catch (error) {
            console.error(error);
        }
    };

    componentDidMount() {
        //this.fetchData();
        this.asyncAwaitFetchData();
    }

    render() {
        const { navigation } = this.props;
        const { item1, item2 } = this.props.route.params;
        const { isLoading, data } = this.state;
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>Test Screen</Text>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text>
                                {item.title}, {item.releaseYear}
                            </Text>
                        )}
                    />
                )}
                <Button
                    onPress={() => this.asyncAwaitFetchData()}
                    title="Fetch Data Again"
                    color="#841584"
                />
                <Text>{item1}</Text>
                <Text>{item2}</Text>
            </View>
        );
    }
}
