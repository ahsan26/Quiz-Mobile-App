import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import DeckList from "./Components/DeckList";
import { TabNavigator } from "react-navigation";
import { purple, white } from "./Utils/colors";
import AddDeck from './Components/AddDeck';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <FontAwesomeIcon icon={faCoffee} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => ""
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: purple,
      style: {
        height: 56,
        backgroundColor: white,
      }
    }
  })

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
