import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { getData } from "../Utils/api";

class DeckList extends React.Component {
    render() {
        const decks = getData();
        return (
            <View>
                {Object.keys(decks).map((deck) => {
                    const { title, questions } = decks[deck];
                    return (
                        <View key={deck}>
                            <Text>{title}</Text>
                            <Text>{questions.length}</Text>
                        </View>
                    )
                })}
            </View>
        );
    }
}

export default DeckList;