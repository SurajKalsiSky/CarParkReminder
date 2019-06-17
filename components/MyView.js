import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

const MyView = props => {
  const { children, showFloorSaved, style } = props;
  if (showFloorSaved) {
    return <View style={style}>{children}</View>;
  }
  return null;
};

MyView.propTypes = {
  showFloorSaved: PropTypes.bool.isRequired
};

export default MyView;
