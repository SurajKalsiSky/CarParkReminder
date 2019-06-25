import React from "react";
import { Text, Button } from "react-native";
import { NavigationActions } from "react-navigation";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Settings",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <Button
        onPress={() =>
          this.props.navigation.navigate("Home", { numberOfFloors: 8 })
        }
        title="Learn More"
        color="#841584"
      />
    );
  }
}
