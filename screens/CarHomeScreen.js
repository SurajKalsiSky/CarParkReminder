import React, { Component } from "react";
import {
  Picker,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import MyView from "../components/MyView";

export default class CarHomeScreen extends Component {
  static navigationOptions = {
    title: "Car park reminder",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  state = {
    currentFloorNumber: null,
    showFloorSaved: false,
    floors: [
      { floorLabel: "Floor 1", floorValue: 1 },
      { floorLabel: "Floor 2", floorValue: 2 }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.whereDidYouParkContainer}>
            <Text style={styles.whereDidYouParkText}>
              Where did you park today?
            </Text>
          </View>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={this.state.currentFloorNumber}
              style={{ height: 100, width: 300 }}
              mode={"dropdown"}
              onValueChange={(itemValue, itemIndex) =>
                this._handleOnClick(itemValue, itemIndex)
              }
            >
              <Picker.Item label="Floor 1" value="1" />
              <Picker.Item label="Floor 2" value="2" />
              <Picker.Item label="Floor 3" value="3" />
              <Picker.Item label="Floor 4" value="4" />
            </Picker>
          </View>
          <MyView
            showFloorSaved={this.state.showFloorSaved}
            style={styles.floorSavedContainer}
          >
            <Text style={styles.floorSavedText1}>Floor number saved!</Text>
            <Text style={styles.floorSavedText2}>
              Will remind you where you parked when you come back to the car
              park.
            </Text>
          </MyView>
        </ScrollView>
      </View>
    );
  }

  _handleOnClick = (itemValue, itemIndex) => {
    this.setState({ currentFloorNumber: itemValue, showFloorSaved: true });
    setTimeout(() => {
      this.setState({ showFloorSaved: false });
    }, 4000);
  };

  _renderPickerItems = () => {
    return <Picker.Item label="Floor 1" value="1" />;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff000"
  },
  contentContainer: {
    paddingTop: 120
  },
  whereDidYouParkContainer: {
    alignItems: "center",
    marginHorizontal: 10
  },
  whereDidYouParkText: {
    fontSize: 28,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  pickerContainer: {
    alignItems: "center",
    paddingTop: 50
  },
  floorSavedContainer: {
    alignItems: "center"
  },
  floorSavedText1: {
    fontSize: 24,
    paddingTop: 50,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  floorSavedText2: {
    fontSize: 20,
    textAlign: "center",
    color: "rgba(96,100,109, 0.9)",
    paddingTop: 20,
    width: 300
  }
});
