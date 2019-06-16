import React, { Component } from "react";
import {
  Picker,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

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
    floorNumber: null
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
              selectedValue={this.state.floorNumber}
              style={{ height: 100, width: 300 }}
              mode={"dropdown"}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ floorNumber: itemValue })
              }
            >
              <Picker.Item label="Floor 1" value="1" />
              <Picker.Item label="Floor 2" value="2" />
              <Picker.Item label="Floor 3" value="3" />
              <Picker.Item label="Floor 4" value="4" />
            </Picker>
          </View>
          <View style={styles.floorSavedContainer}>
            <Text style={styles.floorSavedText1}>Floor number saved!</Text>
            <Text style={styles.floorSavedText2}>
              Will remind you where you parked when you come back to the car
              park.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  _renderFlatlist = () => {
    let data = [{ key: "a" }, { key: "b" }];
    return data;
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
    alignItems: "center",
    paddingTop: 55
  },
  floorSavedText1: {
    fontSize: 24,
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
