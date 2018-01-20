import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { saveDeck } from "../Utils/api";
import { addDeck } from "../Actions";

export default class AddDeck extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ""
        };
    }
    submitName = () => {

    };
    render() {
        return (
            <View>
                <TextInput onChangeText={text => { this.setState({ text }) }} />
                <Button onPress={this.submitName} title="Submit"> </Button>
            </View>
        );
    }
}